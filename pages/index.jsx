import Layout from '@/components/layout'
import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout title="Home | Next.js" home>
      <section className={utilStyles.headingMd}>
        <p>I’m a Frontend Developer and this time I’m learning Next.js</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
