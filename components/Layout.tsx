import { ReactNode } from "react";
import Head from "next/head";

import Nav from "./Nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <body className="min-h-screen bg-gray-900 text-gray-100 font-bitter">
      <Head>
        <title>Robin Métral</title>
      </Head>
      <Nav />
      {children}
    </body>
  );
}
