import Layout from "@/components/layout"
import Link from "next/link"

export default function Pagina404() {
  return (
    <Layout
      title="Guitarra no encontrada"
      description="Guitarra no encontrada, venta de guitarras y blog de música"
    >
      <div className="flex flex-col items-center space-y-2">
        <p className="text-sm md:text-base text-gray-500">404 | Guitarra no encontrada</p>
        <Link href="/" className="text-xs md:text-sm text-gray-400">Click aqui - Regresar al inicio</Link>
      </div>
      
    </Layout>
  )
}
