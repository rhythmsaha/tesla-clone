import Head from "next/head";
import { useRef } from "react";

import HomeProduct from "../components/HomeProduct";
import useScrollSnap from "react-use-scroll-snap";
import { products } from "../data";

export default function Home() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

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

      <div ref={scrollRef}>
        {products.map((product) => (
          <HomeProduct
            id={product.id}
            key={product.id}
            type={product.type}
            model={product.name}
            shortDesc={product.shortdesc}
            mobileImage={product.mainImgMobile}
            desktopImage={product.mainImgDesktop}
            showFooter={product.footer}
          />
        ))}
      </div>
    </>
  );
}
