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
      <p className="mb-4">
        Congrats,you found the Books page! Unfortunately though, it's still
        under construction. Come back soon!
      </p>
      <p className="mb-4">
        You can also subscribe to updates via RSS! Here's the{" "}
        <Link href="/books/feed.xml">feed link</Link> to paste in your favorite
        RSS reader.
      </p>
      <ul>
        {books.map(({ frontMatter, slug }) => (
          <li key={slug}>
            {new Date(frontMatter.finishedDate).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
            : <Link href={`/books/${slug}`}>{frontMatter.title}</Link>
          </li>
        ))}
      </ul>
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
    .filter((book) => book.frontMatter.status === "read")
    .sort((a, b) => b.frontMatter.finishedDate - a.frontMatter.finishedDate);
  return {
    props: {
      books: booksRead,
    },
  };
}
