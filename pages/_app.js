import { useState, useEffect } from "react"
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const [ paginaLista, setPaginaLista ] = useState(false)
  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const [ carrito, setCarrito ] = useState(carritoLS)

  useEffect(() => {
    setPaginaLista(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  
  const agregarGuitarra = guitarra => {
    if(carrito.some(carritoState => carritoState.id === guitarra.id)) {
      const actualizarCarrito = carrito.map(carritoState => {
        if(carritoState.id === guitarra.id) {
          carritoState.cantidad = guitarra.cantidad
        }
        return carritoState
      })
      setCarrito(actualizarCarrito)
    } else {
      setCarrito([...carrito, guitarra])
    }
  }

  const actualizarCantidad = guitarra => {
    const actualizarCarrito = carrito.map(carritoState => {
      if(carritoState.id === guitarra.id) {
        carritoState.cantidad = guitarra.cantidad
      }
      return carritoState
    })
    setCarrito(actualizarCarrito)
  }

  const eliminarGuitarra = id => {
    const actualizarCarrito = carrito.filter(carritoState => carritoState.id !== id)
    setCarrito(actualizarCarrito)
  }

    return paginaLista ? <Component {...pageProps} 
    carrito={carrito}
    agregarGuitarra={agregarGuitarra}
    actualizarCantidad={actualizarCantidad}
    eliminarGuitarra={eliminarGuitarra}
  /> : null
}
