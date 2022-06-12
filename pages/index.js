import Head from "next/head";

import HomeProduct from "../components/HomeProduct";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Electric Cars, Solar &amp; Clean Energy | Tesla</title>
        <meta
          name="description"
          content="Tesla is accelerating the world&#039;s transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses."
        />
        <link
          rel="shortcut icon"
          href="https://tesla.com/themes/custom/tesla_frontend/assets/favicons/favicon.ico"
          type="image/vnd.microsoft.icon"
        />
      </Head>

      <HomeProduct />
      <HomeProduct />
    </>
  );
}
