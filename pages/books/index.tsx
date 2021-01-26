import Link from "../../components/Link";
import Heading from "../../components/Heading";
import { getBooksSlugs, getBookBySlug, BookMetadata } from "../../lib/books";

export default function Books({
  books,
}: {
  books: {
    markdown: string;
    frontMatter: BookMetadata;
    slug: string;
  }[];
}) {
  return (
    <>
      <Heading>Books</Heading>
      <p className="mb-4">Here I track the books I read.</p>
      <p className="mb-10">
        If you'd like, you can subscribe to updates on this page via RSS. Here's
        the <Link href="/books/feed.xml">link</Link> to paste in your favorite
        RSS reader.
      </p>
      <Heading level="2">2021</Heading>
      <ul className="mb-10 list-disc list-inside">
        {books.map(({ markdown, frontMatter, slug }) => {
          const hasReview: boolean = markdown.length > 0;
          return (
            <li key={slug}>
              {new Date(frontMatter.finishedDate).toLocaleDateString("en-GB", {
                month: "numeric",
                day: "numeric",
              })}
              :{" "}
              {hasReview ? (
                <Link href={`/books/${slug}`}>{frontMatter.title}</Link>
              ) : (
                frontMatter.title
              )}{" "}
              ({frontMatter.author})
            </li>
          );
        })}
      </ul>
      <Heading level="2">2020</Heading>
      <p>I'm still importing earlier reads and reviews. Come back soon!</p>
    </>
  );
}

export async function getStaticProps() {
  const slugs = getBooksSlugs();
  const books = await Promise.all(
    slugs.map(async (slug) => {
      const { markdown, frontMatter } = await getBookBySlug(slug);
      return { markdown, frontMatter, slug };
    })
  );
  const booksRead = books
    .filter(({ frontMatter }) => frontMatter.status === "read")
    .sort((a, b) => b.frontMatter.finishedDate - a.frontMatter.finishedDate);
  return {
    props: {
      books: booksRead,
    },
  };
}
