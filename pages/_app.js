import "../styles/globals.css";
import Layout from "../components/seo/Layout";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
