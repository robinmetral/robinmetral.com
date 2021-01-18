export default function Home() {
  return (
    <main className="max-w-xl m-auto text-xl">
      <h1 className="text-9xl font-black mb-4">
        Hi<span className="text-yellow-400">.</span>
      </h1>
      <p className="text-xl font-light mb-6">
        My name is{" "}
        <a
          href="https://twitter.com/robinmetral"
          className="underline hover:text-yellow-400 focus:text-yellow-400"
        >
          Robin
        </a>
        .
      </p>
      <p className="text-xl font-light mb-6">
        I'm redesigning my website (again).
      </p>
    </main>
  );
}
