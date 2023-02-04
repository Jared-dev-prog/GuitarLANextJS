import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"

export default function Tienda({guitarras}) {

  return (
    <Layout
      title="Tienda"
      description="Venta de guitarras, blog de música y mucho más..."
    >
      <main className="w-10/12 md:8/12 mx-auto">
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
    </Layout>
    
  )
}

// export async function getStaticProps() {
//   const url = `${process.env.API_URL}/guitarras?populate=imagen`
//   const respuesta = await fetch(url)
//   const {data: guitarras} = await respuesta.json()

//   return {
//     props: {
//       guitarras
//     }
//   }
// }

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras?populate=imagen`
  const respuesta = await fetch(url)
  const {data: guitarras} = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}

