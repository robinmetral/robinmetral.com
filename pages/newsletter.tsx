import { useState, useRef, FormEvent } from "react";

export default function Newsletter() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [requestState, setRequestState] = useState<
    "IDLE" | "LOADING" | "ERROR" | "SUCCESS"
  >("IDLE");

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
      <h1 className="text-4xl md:text-8xl font-black mb-4">Newsletter</h1>
      <p className="mb-4">
        I write a weekly newsletter about anything. Subscribe below.
      </p>
      {requestState === "SUCCESS" ? (
        <p className="text-green-400">You're on the list!</p>
      ) : (
        <form onSubmit={handleSubmit}>
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
              disabled={requestState === "LOADING"}
              className="bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 px-2 py-1 rounded-sm w-full xs:w-auto"
            />
            <button
              type="submit"
              disabled={requestState === "LOADING"}
              className="bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 px-2 py-1 rounded-sm w-full sm:w-auto"
            >
              Subscribe
            </button>
          </div>
          {requestState === "LOADING" && <p className="mt-4">Loading...</p>}
          {requestState === "ERROR" && (
            <p className="text-red-400 mt-4">Something went wrong.</p>
          )}
        </form>
      )}
    </>
  );
}
