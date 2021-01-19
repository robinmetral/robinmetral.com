import NextLink from "next/link";
import { ReactNode } from "react";

export default function Link({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <NextLink href={href}>
      <a className="underline hover:text-yellow-400 focus:text-yellow-400">
        {children}
      </a>
    </NextLink>
  );
}
