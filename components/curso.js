import React from 'react'

export default function Curso({curso}) {
  const { contenido, imagen, titulo } = curso

  const imagenCurso = `url(${imagen.data.attributes.url})`
  return (
    <section className='py-12 md:py-20 curso bg-cover bg-center bg-no-repeat'>
      <style jsx=''>{`
        .curso {
          background-image: linear-gradient(to right, rgb(0 0 0 / .5), rgb(0 0 0 / .65)), ${imagenCurso}
        }
      `}</style>
      <div className='w-10/12 mx-auto grid grid-cols-2'>
        <div className='col-start-2 space-y-2'>
          <h1 className='text-yellow-500 font-bold text-center md:text-xl'>{titulo}</h1>
          <p className='text-gray-200 text-xs text-justify leading-5 md:text-sm'>{contenido}</p>
        </div>
      </div>
    </section>
  )
}
