import Layout from "@/components/layout"
import utilStyles from "../../styles/utils.module.css"

export default function Post({ data }) {
  return (
    <Layout title={`Post ${data.id} | Next.js`}>
      <article>
        <h1 className={utilStyles.headingXl}>{data.id} - {data.title}</h1>
        <div className={utilStyles.lightText}>
          <p>{data.body}</p>
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }))

    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
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
