import "./globals.css";
import Layout from "./components/Layout";

function Home({ Component, pageProps }) {
  return (
    <Layout>
      <h1 textalign="center">The Sun App</h1>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Home;
