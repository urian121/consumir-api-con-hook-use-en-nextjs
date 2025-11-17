'use client';
import Image from 'next/image';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';

export default function FoodItemCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="md:flex">
        <div className="md:shrink-0 p-4">
          <Image
            width={200}
            height={200}
            className="h-48 w-48 object-cover rounded-2xl mx-auto md:mx-0"
            src={item.image}
            alt={item.name}
          />
        </div>
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
              <span className="text-2xl font-bold text-green-600">${item.price}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Deliciosa hamburguesa con ingredientes frescos y de la más alta calidad.
              Una experiencia gastronómica que no te puedes perder.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button className="bg-gray-200 hover:bg-gray-300 hover:cursor-pointer rounded-full w-8 h-8 flex items-center justify-center transition-colors">
                <FiMinus className="text-gray-600" size={16} />
              </button>
              <span className="font-semibold text-lg">1</span>
              <button className="bg-gray-800 hover:bg-gray-700 hover:cursor-pointer text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors">
                <FiPlus className="text-white" size={16} />
              </button>
            </div>
            <button className="hover:cursor-pointer px-4 py-2 rounded-lg transition-colors duración-200 flex items-center space-x-2">
              <FiTrash2 size={16} className="text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}