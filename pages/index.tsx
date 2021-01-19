export default function Home() {
  return (
    <>
      <h1 className="text-4xl md:text-8xl font-black mb-4">
        Hi<span className="text-yellow-400">.</span>
      </h1>
      <p className="mb-4">
        My name is{" "}
        <a
          href="https://twitter.com/robinmetral"
          className="underline hover:text-yellow-400 focus:text-yellow-400"
        >
          Robin
        </a>
        .
      </p>
      <p>I'm redesigning my website (again).</p>
    </>
  );
}
