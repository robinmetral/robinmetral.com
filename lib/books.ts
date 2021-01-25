import fs from "fs";
import { join } from "path";
import remark from "remark";
import html from "remark-html";
import matter from "gray-matter";

const booksDirectory = join(process.cwd(), "_books");

export function getBooksSlugs(): string[] {
  const fileNames = fs.readdirSync(booksDirectory);
  const slugs = fileNames.map((fileName) => fileName.replace(".md", ""));
  return slugs;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

type FrontMatter = {
  title?: string;
  author?: string;
  publishedYear?: number;
  isbn?: string;
  status?: "read" | "to-read";
  shelves?: string[];
  rating?: number;
  finishedDate?: string;
};

export interface BookMetadata extends Omit<FrontMatter, "finishedDate"> {
  finishedDate?: number; // milliseconds since epoch
}

export function getBookBySlug(
  slug: string
): { markdown: string; frontMatter: BookMetadata } {
  const fullPath = join(booksDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data }: { content: string; data: FrontMatter } = matter(
    fileContents
  );
  const finishedDate = new Date(data.finishedDate).valueOf(); // .valueOf() is a TS fix
  return {
    markdown: content,
    frontMatter: {
      ...data,
      finishedDate,
    },
  };
}
