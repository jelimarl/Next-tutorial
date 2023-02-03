import Layout from "@/components/layout";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css"

export default function Index({ data }) {
  return (
    <Layout title="Blog | Next.js">
      <h1 className={utilStyles.headingXl}>Posts</h1>
      {
        data.map(({ id, title, body }) => (
          <div className={utilStyles.listItem} key={id}>
            <h4>
              <Link href={`/blog/${id}`}>{id} - {title}</Link>
            </h4>
            <br />
            <small className={utilStyles.lightText}>
              <p>{body}</p>
            </small>
          </div>
        ))
      }
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.log(error)
  }
}