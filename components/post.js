import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "../helpers"

export default function Post({post}) {
  const { titulo, imagen, publishedAt, contenido, url } = post
  
  return (
    <div className="border border-gray-400 rounded-lg shadow-lg">
      <Image src={imagen.data[0].attributes.url} width={200} height={50} alt={`Imagen de post ${titulo}`} className='w-full rounded-t-lg'/>

      <div className="p-3 space-y-2">
        <h3 className="text-sm text-gray-600 font-bold tracking-wide">{titulo}</h3>
        <p className="text-xs text-gray-400 font-semibold">{formatearFecha(publishedAt)}</p>
        <p className="text-xs text-justify line-clamp-4 leading-5 text-gray-500">{contenido}</p>

        <div className="flex justify-end">
          <Link href={`/posts/${url}`} className='text-xs bg-gray-900 text-gray-100 py-0.5 px-3 rounded'>Leer post</Link>
        </div>
      </div>
    </div>
  )
}
