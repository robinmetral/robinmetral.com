import Image from "next/image";

import Heading from "../../components/Heading";
import {
  getBooksSlugs,
  getBookBySlug,
  markdownToHtml,
  BookMetadata,
} from "../../lib/books";

export default function Book({
  book: { frontMatter, html },
}: {
  book: { html: string; frontMatter: BookMetadata };
}) {
  const imageUrl = `https://covers.openlibrary.org/b/isbn/${frontMatter.isbn}-M.jpg?default=false`;
  return (
    <>
      <Heading>{frontMatter.title}</Heading>
      <div className="flex flex-row my-6 gap-4">
        <Image src={imageUrl} width={180} height={275} />
        <ul>
          <li>{frontMatter.author}</li>
          <li>{frontMatter.publishedYear}</li>
        </ul>
      </div>
      <article
        className="prose-lg md:prose-xl"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getBooksSlugs();
  const paths = slugs.map((slug) => `/books/${slug}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { frontMatter, markdown } = getBookBySlug(params.slug);
  const html = await markdownToHtml(markdown);
  return {
    props: {
      book: {
        frontMatter,
        html,
      },
    },
  };
}
