import Heading from "../components/Heading";
import Link from "../components/Link";

export default function Home() {
  return (
    <>
      <Heading>
        Hi<span className="text-yellow-400">,</span>
      </Heading>
      <p className="mb-4">My name is Robin.</p>
      <p className="mb-4">
        I grew up in Geneva, Switzerland, and I'm currently living in Berlin. I
        work as a software engineer at{" "}
        <Link href="https://sumup.com">SumUp</Link>.
      </p>
      <p className="mb-4">
        I'm aware this isn't much of a bio, and I promise I'll add some more
        soon.
      </p>
      <p>
        Until then, feel free to take a look around,{" "}
        <Link href="/newsletter">subscribe</Link> to my newsletter, or{" "}
        <Link href="https://twitter.com/robinmetral">say hi</Link> on Twitter.
      </p>
    </>
  );
}
