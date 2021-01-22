import { ReactNode } from "react";

export default function Heading({ children }: { children: ReactNode }) {
  return <h1 className="text-6xl md:text-8xl font-black mb-4">{children}</h1>;
}
