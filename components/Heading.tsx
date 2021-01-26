import { ReactNode } from "react";

export default function Heading({
  children,
  level = "1",
}: {
  children: ReactNode;
  level?: "1" | "2";
}) {
  if (level === "1") {
    return <h1 className="text-6xl md:text-8xl font-black mb-4">{children}</h1>;
  }
  if (level === "2") {
    return <h2 className="text-4xl md:text-6xl font-black mb-4">{children}</h2>;
  }
}
