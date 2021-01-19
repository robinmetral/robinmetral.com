import { ReactNode } from "react";
import Head from "next/head";

import Nav from "./Nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-bitter">
      <Head>
        <title>Robin Métral</title>
      </Head>
      <Nav />
      <main className="mt-8 md:mt-16 px-4 max-w-3xl mx-auto text-lg md:text-xl">
        {children}
      </main>
    </div>
  );
}
