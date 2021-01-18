export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-xl p-6">
        <h1 className="text-9xl font-black mb-4">
          Hi<span className="text-yellow-400">.</span>
        </h1>
        <p className="text-xl font-light mb-6">
          My name is{" "}
          <a href="https://twitter.com/robinmetral" className="underline">
            Robin
          </a>
          .
        </p>
        <p className="text-xl font-light mb-6">
          I'm redesigning my website (again).
        </p>
      </div>
    </main>
  );
}
