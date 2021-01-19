import Link from "../components/Link";

export default function Home() {
  return (
    <>
      <h1 className="text-6xl md:text-8xl font-black mb-4">
        Hi<span className="text-yellow-400">.</span>
      </h1>
      <p className="mb-4">My name is Robin.</p>
      <p>
        I'm redesigning my website (again). For updates, you can subscribe to my{" "}
        <Link href="/newsletter">newsletter</Link> or follow me on{" "}
        <Link href="https://twitter.com/robinmetral">Twitter</Link>.
      </p>
    </>
  );
}
