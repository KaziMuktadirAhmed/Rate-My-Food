import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Kazi Muktadir Ahmed";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }: any) {
  return (
    <>
      <Head>
        {/* SEO data */}
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {children}
    </>
  );
}
