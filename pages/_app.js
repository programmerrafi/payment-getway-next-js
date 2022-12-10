import { CreateConText } from "../app/Context/createConText";
import Layout from "../app/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CreateConText>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CreateConText>
  );
}

export default MyApp;
