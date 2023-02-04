import Layout from "@/components/layout"
import Image from "next/image"
import { formatearFecha } from "../../helpers"

export default function Post({post}) {
  const { contenido, imagen, publishedAt, titulo, url } = post[0].attributes
  console.log(imagen.data[0].attributes.url)
  return (
    <Layout
      title={titulo}
      description={`Post ${titulo}, venta de guitarras, blog de música y mucho más`}
    >
      <article className="w-8/12 md:w-6/12 lg:w-4/12 mx-auto flex flex-col items-center border rounded-lg border-gray-400 shadow-xl">
        <Image src={imagen.data[0].attributes.url} width={500} height={50} alt={`Imagen de posts ${titulo}`} className=' rounded-t-lg'/>

        <div className=" p-3 flex flex-col space-y-2">
          <h3 className="text-gray-500 font-bold tracking-wider" >{titulo}</h3>
          <p className="text-xs text-gray-500 font-semibold">{formatearFecha(publishedAt)}</p>
          <p className="text-gray-600 text-sm leading-6 text-justify">{contenido}</p>
        </div>
      </article>
    </Layout>
  )
}

export async function getServerSideProps({query}) {
  const { url } = query
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
  const { data: post } = await respuesta.json()

  return {
    props: {
      post
    }
  }
}
