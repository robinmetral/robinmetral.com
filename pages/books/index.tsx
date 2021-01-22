import Link from "../../components/Link";
import Heading from "../../components/Heading";
import { getBooksSlugs, getBookBySlug, FrontMatter } from "../../lib/books";

export default function Books({
  books,
}: {
  books: {
    markdown: string;
    frontMatter: FrontMatter;
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
      <ul>
        {books.map(({ frontMatter, slug }) => (
          <li key={slug}>
            <Link href={`/books/${slug}`}>{frontMatter.title}</Link>
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
  return {
    props: {
      books,
    },
  };
}
