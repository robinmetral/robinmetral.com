import fs from "fs";
import { Feed } from "feed";

import { getBooksSlugs, getBookBySlug, markdownToHtml } from "../lib/books";

async function generateRSS() {
  const feed = new Feed({
    // required params
    title: "Robin's Book Reviews",
    description: "Recent book reviews on robinmetral.com",
    link: "https://robinmetral.com/books",
    // optional params
    language: "en",
    // id and copyright should be optional
    // see https://github.com/jpmonette/feed/issues/138
    id: "some-id",
    copyright: "Robin Métral 2021",
    feedLinks: {
      rss: "https://robinmetral.com/books/feed.xml",
    },
  });

  const slugs = getBooksSlugs();
  const books = await Promise.all(
    slugs.map(async (slug) => {
      const { frontMatter, markdown } = getBookBySlug(slug);
      const html = await markdownToHtml(markdown);
      return { frontMatter, html, slug };
    })
  );

  books
    .filter(({ frontMatter }) => frontMatter.status === "read")
    .sort((a, b) => b.frontMatter.finishedDate - a.frontMatter.finishedDate)
    .map(({ frontMatter, html, slug }) => {
      feed.addItem({
        title: frontMatter.title,
        link: `https://robinmetral.com/books/${slug}`,
        date: new Date(frontMatter.finishedDate),
        content: html,
      });
    });

  const rss = feed.rss2();
  fs.writeFileSync("./public/books/feed.xml", rss);
}

generateRSS();
