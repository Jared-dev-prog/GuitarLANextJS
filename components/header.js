import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"

export default function Header() {
  const router = useRouter()

  return (
    <header className={`${styles.header} mb-5`}>
      <div className="w-10/12 md:w-8/12 mx-auto flex flex-col md:flex-row gap-y-4 justify-between items-center">
        <Image src="/img/logo.svg" width={150} height={30} alt="Imagen del logo" />

        <nav className="text-white text-xs md:text-sm flex gap-x-2 font-semibold items-center">
          <Link href="/" className={`${router.pathname === "/" ? "border-b-yellow-500" : "border-b-transparent"} border-b hover:border-b-yellow-500`}>Incio</Link>
          <Link href="/nosotros" className={`${router.pathname === "/nosotros" ? "border-b-yellow-500" : "border-b-transparent"} border-b hover:border-b-yellow-500`}>Nosotros</Link>
          <Link href="/tienda" className={`${router.pathname === "/tienda" ? "border-b-yellow-500" : "border-b-transparent"} border-b hover:border-b-yellow-500`}>Tienda</Link>
          <Link href="/blog" className={`${router.pathname === "/blog" ? "border-b-yellow-500" : "border-b-transparent"} border-b hover:border-b-yellow-500`}>Blog</Link>
          <Link href="/carrito">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="6" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>         
          </Link>
        </nav>
      </div>
    </header>
  )
}
