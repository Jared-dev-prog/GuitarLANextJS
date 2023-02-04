import { useState } from 'react'
import Layout from "@/components/layout"
import Image from "next/image"

export default function Guitarra({guitarra, agregarGuitarra}) {
  const [ cantidad, setCantidad ] = useState(0)
  const { nombre, precio, descripcion, imagen } = guitarra[0].attributes

  const handleSubmit = e => {
    e.preventDefault()
    
    if(cantidad < 1) {
      alert('Cantidad no válida')
    }

    const guitarraSeleccionada = {
      id: guitarra[0].id, 
      imagen: imagen.data.attributes.url,
      nombre, 
      precio,  
      cantidad
    }

    agregarGuitarra(guitarraSeleccionada)
  }
  
  return (
    <Layout
      title={nombre}
      description={`Guitarra ${nombre}, tienda de música y blog de música`}
    >
      <main className="w-9/12 md:w-7/12 lg:w-5/12 mx-auto flex items-center border px-3 border-gray-300 rounded-md shadow-lg">
        <Image src={imagen.data.attributes.formats.medium.url} width={100} height={100} alt={`Imagen de guitarra ${nombre}`} className='md:w-36'/>

        <div className="space-y-2">
          <h3 className="text-gray-500 font-bold tracking-widest text-lg">{nombre}</h3>
          <p className="text-xs md:text-sm text-justify text-gray-500 leading-5">{descripcion}</p>
          <div className="flex justify-between items-start">
            <p className="font-bold text-gray-700">${precio}</p>

            <form
              onSubmit={handleSubmit}
            >
              <div className="flex items-center gap-x-2">
                <label className="text-gray-500 text-sm">Cantidad:</label>
                <select className="text-xs border border-gray-400 rounded-md px-2 text-gray-600"
                  onChange={e => setCantidad(+e.target.value)}
                  value={cantidad}
                >
                  <option value="0">Seleccione</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="flex justify-end mt-3">
                <input type="submit" value="Agregar al carrito" className="text-xs bg-gray-900 text-gray-100 py-0.5 px-2 rounded cursor-pointer hover:bg-black"/>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const {data: datos} = await respuesta.json()

  const paths = datos.map(guitarra => ({
    params: {
      url: guitarra.attributes.url
    }
  }))

  return {
    paths, 
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const { url } = params
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const {data: guitarra} = await respuesta.json()

  return {
    props: {
      guitarra
    }
  }
}

// export async function getServerSideProps({query}) {
//   const { url } = query
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//   const {data: guitarra} = await respuesta.json()

//   return {
//     props: {
//       guitarra
//     }
//   }
// }
