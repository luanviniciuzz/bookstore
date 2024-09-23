import React  from 'react'

function CardBook({ image, title, descri }) {

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-5 m-5">
      <img className="w-full h-44 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base">
          <p>{descri}</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded-md">Comprar</button>
      </div>
    </div>
  );
}

export default CardBook