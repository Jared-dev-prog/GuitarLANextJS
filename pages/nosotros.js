import Layout from '@/components/layout'
import Image from 'next/image'

export default function Nosotros() {
  return (
    <Layout
      title='Nosotros'
      description='Sobre nosotros, venta de guitarras y blog de música'
    >
      <main className='w-10/12 md:8/12 mx-auto'>
        <h1 className='text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl'>Nosotros</h1>

        <div className='flex flex-col md:flex-row gap-4 items-center'>
          <Image src="/img/nosotros.jpg" width={500} height={200} alt="Imagen de nosotros"/>

          <div className='space-y-2 text-justify text-sm leading-6'>
            <p className='font-light text-gray-600 '>Nullam et neque sed nisi commodo viverra. Cras vitae libero tincidunt, elementum augue ac, aliquet nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac tincidunt diam. Sed felis ipsum, consequat ornare molestie pharetra, luctus eget nisi. Donec eget tempor ante. Vivamus et justo mi.</p>

            <p className='font-light text-gray-600'>Aenean non efficitur quam. Curabitur elit metus, porta consequat justo sed, bibendum mollis sem. Aenean id mi aliquet, aliquam lorem vel, rhoncus metus. Cras ac orci aliquet, ultricies nunc ut, luctus metus. Donec suscipit venenatis massa vitae accumsan.</p>

            <p className='font-light text-gray-600'>Etiam et pellentesque urna. Nulla vel nisl vitae nisl varius semper non ac lacus. Ut malesuada quam urna, ut ullamcorper mi ultricies vitae. Donec sed congue lectus. Praesent convallis, metus id blandit laoreet, ante orci sagittis erat, non feugiat tellus ligula vitae ligula. Donec tempus quam eget nibh pulvinar aliquet. Vestibulum eu turpis in est euismod viverra nec eget nibh. Vestibulum sagittis aliquam mauris et faucibus. Nunc in molestie ipsum.</p>
          </div>
        </div>
      </main>
    </Layout>

  )
}
