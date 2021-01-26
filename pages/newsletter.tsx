import { useState, useRef, FormEvent } from "react";

import Heading from "../components/Heading";
import Link from "../components/Link";

export default function Newsletter() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [requestState, setRequestState] = useState<
    "IDLE" | "LOADING" | "ERROR" | "SUCCESS"
  >("IDLE");
  const isDisabled = requestState === "LOADING" || requestState === "SUCCESS";

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setRequestState("LOADING");

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: emailInputRef.current.value }),
    });

    if (response.ok) {
      setRequestState("SUCCESS");
    } else {
      setRequestState("ERROR");
    }
  };

  return (
    <>
      <Heading>Newsletter</Heading>
      <p className="mb-4">I write a loosely defined weekly newsletter.</p>
      <p className="mb-4">
        Previous issues have featured thoughts from the{" "}
        <Link href="https://buttondown.email/robinmetral/archive/488a5c88-4c61-43a7-82a4-1d6f2c5dfc11">
          theme of music in Murakami novels
        </Link>{" "}
        to a rabbit hole exploration of{" "}
        <Link href="https://buttondown.email/robinmetral/archive/9fe266e0-9cb8-4e9b-9e12-89484e7b67ba">
          Corsican vendetta knives
        </Link>
        .
      </p>
      <p className="mb-4">
        You can see it as a window into what I’m currently passionate about, a
        bit like the portal in the wardrobe in Narnia, except the wardrobe is
        your inbox and Narnia is my brain.
      </p>
      <p className="mb-8">It's called Those Who Wander. Subscribe below.</p>

      <form onSubmit={handleSubmit}>
        {requestState === "IDLE" && <p className="mb-4">Enter your email</p>}
        {requestState === "LOADING" && <p className="mb-4">Loading...</p>}
        {requestState === "ERROR" && (
          <p className="text-red-400 mb-4">Something went wrong.</p>
        )}
        {requestState === "SUCCESS" && (
          <p className="text-green-400 mb-4">You're on the list!</p>
        )}
        <div className="flex flex-col xs:flex-row gap-2">
          <label className="hidden" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            ref={emailInputRef}
            type="email"
            placeholder="please@email.me"
            required
            disabled={isDisabled}
            className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 px-2 py-1 rounded-sm w-full xs:w-auto"
          />
          <button
            type="submit"
            disabled={isDisabled}
            className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 px-2 py-1 rounded-sm w-full sm:w-auto"
          >
            Subscribe
          </button>
        </div>
      </form>
    </>
  );
}
