import Image from "next/image"
import Link from "next/link"

export default function Guitarra({guitarra}) {
  const { nombre, descripcion, imagen, precio, url } = guitarra

  return (
    <div className="flex items-center">
      <Image src={imagen.data.attributes.url} width={100} height={50} alt={`Imagen de guitarra ${nombre}`} className='h-auto w-20'/>

      <div className="space-y-2 border p-2 rounded-lg border-gray-400 shadow-md">
        <h3 className="text-gray-500 font-bold tracking-widest">{nombre}</h3>
        <p className="text-xs line-clamp-4 text-justify text-gray-500 leading-5">{descripcion}</p>
        <p className="text-sm font-bold text-gray-700">${precio}</p>
        <div className="flex justify-end">
          <Link href={`/guitarras/${url}`} className='text-xs bg-gray-900 text-gray-100 py-0.5 px-2 rounded-md'>Ver producto</Link> 
        </div>
        
      </div>
    </div>
  )
}
