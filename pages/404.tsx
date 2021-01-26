import Heading from "../components/Heading";
import Link from "../components/Link";

export default function Home() {
  return (
    <>
      <Heading>
        404<span className="text-yellow-400">.</span>
      </Heading>
      <p className="mb-4">Page not found.</p>
      <p className="mb-4">
        There's not much you can do here, do you want to{" "}
        <Link href="/">go back home</Link>?
      </p>
    </>
  );
}
