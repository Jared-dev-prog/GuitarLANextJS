import Layout from "@/components/layout"
import Post from "@/components/post"

export default function Blog({posts}) {

  return (
    <Layout
      title="Blog"
      description="Blog de música, venta de guitarras y mucho más..."
    >
      <main className="w-10/12 md:8/12 mx-auto">
        <h1 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl">Blog</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {posts?.map(post => (
            <Post 
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </main>
    </Layout>
    
  )
}

export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data: posts} = await respuesta.json()

  return {
    props: {
      posts
    }
  }
}