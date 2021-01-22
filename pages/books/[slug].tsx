import Heading from "../../components/Heading";
import {
  getBooksSlugs,
  getBookBySlug,
  markdownToHtml,
  FrontMatter,
} from "../../lib/books";

export default function Book({
  book,
}: {
  book: { html: string; frontMatter: FrontMatter };
}) {
  return (
    <>
      <Heading>{book.frontMatter.title}</Heading>
      <div dangerouslySetInnerHTML={{ __html: book.html }} />
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
