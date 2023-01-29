import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/css-grid-layout.module.css";
import Layout from "@/components/layout";

function PracticeGridLayout() {
  return (
    <Layout>
      <Head>
        <title>Practice layout</title>
      </Head>
      <div className={styles.page_container}>
        <header className={styles.page_header}>
          <h1>Header content</h1>
          <Link href="/">Back to title &larr;</Link>
        </header>
        <main className={styles.page_content}>
          <nav className={styles.content_navigation}>
            <h1>Navigation</h1>
          </nav>
          <article className={styles.content_article}>
            <h1>Main Content</h1>
          </article>
          <aside className={styles.content_side_bar}>
            <h1>Sidebar</h1>
          </aside>
        </main>
        <footer className={styles.page_footer}>
          <h1>Footer content</h1>
        </footer>
      </div>
    </Layout>
  );
}

export default PracticeGridLayout;
