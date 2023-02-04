import { useState, useEffect } from "react"
import Layout from "@/components/layout"
import Productos from "@/components/productos"

export default function Carrito({carrito, actualizarCantidad, eliminarGuitarra}) {
  const [ total, setTotal ] = useState(0)

  useEffect(() => {
    const cantidadTotal = carrito.reduce((total, guitarra) => total + (guitarra.cantidad * guitarra.precio), 0)
    setTotal(cantidadTotal)
  }, [carrito])

  return (
    <Layout 
      title="Carrito de compras"
      description="Carrito de compras, venta de guitarras, blog de música y mucho más"
    >
      <main className="w-10/12 md:w-7/12 mx-auto relative">
        <h1 className="text-center mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl">Carrito de compras</h1>

        <div className="grid grid-cols-3 gap-x-5 items-start">
          <div className="col-span-2">
            <h2 className="text-sm md:text-lg text-gray-500 font-bold mb-4">{carrito.length !== 0 ? 'Artículos' : 'No existen artículos'}</h2>

            {carrito?.map(guitarra => (
              <Productos 
                key={guitarra?.id}
                guitarra={guitarra}
                actualizarCantidad={actualizarCantidad}
                eliminarGuitarra={eliminarGuitarra}
              />
            ))}
          </div>

          <div className="bg-gray-100 p-4 rounded-md space-y-2 col-start-3 sticky top-2">
            <h3 className="text-gray-500 text-sm">Resumen del pedido</h3>
            <p className="text-xs text-gray-500">Total a pagar: ${total}</p>
          </div>
        </div>
      </main>
    </Layout>

  )
}
