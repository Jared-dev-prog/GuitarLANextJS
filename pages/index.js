import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import Post from "@/components/post"
import Curso from "@/components/curso"

export default function Inicio({guitarras, posts, curso}) {

  return (
    <Layout
      title="Inicio"
      description="Venta de guitarras, blog de música y mucho más..."
    >
      <main className="w-10/12 md:8/12 mx-auto mb-5">
        <h1 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl">Nuestra colección</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
          {guitarras?.map(guitarra => (
            <Guitarra 
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      </main>

      <Curso 
        curso={curso.attributes}
      />

      <section className="w-10/12 md:8/12 mx-auto mt-5">
        <h1 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl">Blog</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {posts?.map(post => (
            <Post 
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </section>
    </Layout>
    
  )
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [ resGuitarras, resPosts, resCurso ] = await Promise.all([
    fetch(urlGuitarras), 
    fetch(urlPosts), 
    fetch(urlCurso)
  ])

  const [{data: guitarras}, {data: posts}, {data: curso}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(), 
    resCurso.json()
  ])

  return {
    props: {
      guitarras, 
      posts, 
      curso
    }
  }
}
