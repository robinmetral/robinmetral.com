import { AppProps } from "next/app";
import splitbee from "@splitbee/web";

import Layout from "../components/Layout";
import "../styles/globals.css";

splitbee.init({
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
