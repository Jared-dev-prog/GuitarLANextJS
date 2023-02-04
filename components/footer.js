import Link from "next/link"

export default function Footer() {
  return (
    <footer className='bg-black py-8 mt-5'>
      <div className="w-10/12 md:w-8/12 mx-auto flex flex-col md:flex-row gap-y-4 justify-between items-center">

        <nav className="text-white text-xs flex flex-col items-center gap-y-2 md:flex-row gap-x-2 ">
          <Link href="/">Incio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/tienda">Tienda</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        <p className='text-white text-xs'>&copy; Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
