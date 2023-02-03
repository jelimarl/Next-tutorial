import Head from "next/head"
import Link from "next/link"
import styles from "../styles/layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Image from "next/image"

const name = "Jelimar León"

export default function Layout({ children, title, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learning how to build a personal website using Next.js"
        />
        <title>{title}</title>
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image priority
              src="/img/dev.jpg"
              className={utilStyles.borderCircle}
              height={200}
              width={200}
              alt="">
            </Image>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image priority
                src="/img/dev.jpg"
                className={utilStyles.borderCircle}
                height={150}
                width={150}
                alt="">
              </Image>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>{name}</Link>
            </h2>
          </>
        )}
      </header>

      <nav>
        <Link href="/blog">Blog | </Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <main>
        {children}
      </main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}

Layout.defaultProps = {
  title: "My website | Next.js"
}


