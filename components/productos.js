import Image from "next/image"

export default function Productos({guitarra, actualizarCantidad, eliminarGuitarra}) {
  const { cantidad, imagen, nombre, precio, id } = guitarra

  return (
    <div className='flex gap-x-5 border rounded-lg shadow-lg p-3 mb-4 md:w-2/3 relative'>
      <Image src={imagen} width={100} height={50} alt={`Imagen de guitarra ${nombre}`} className="w-1/4 m-0"/>

      <div className="space-y-2 text-xs md:text-sm">
        <h3 className="text-base md:text-lg text-gray-700 font-bold">{nombre}</h3>
        <p className="text-gray-500">Cantidad:</p>
        <select className="text-xs border border-gray-400 rounded-md px-2 text-gray-600 w-full"
          value={cantidad}
          onChange={e => actualizarCantidad({
            id: guitarra.id, 
            cantidad: +e.target.value
          })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p className="text-gray-700 font-semibold">${precio}</p>
        <p className="text-gray-700 font-semibold">Subtotal: ${cantidad * precio}</p>
      </div>

      <button className="absolute right-3 top-2 bg-gray-200 px-1 text-sm rounded text-gray-400 hover:bg-gray-300"
        onClick={() => eliminarGuitarra(id)}
      >x</button>
    </div>
  )
}
