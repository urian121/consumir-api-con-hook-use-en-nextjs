'use client';

import { use } from 'react';
import FoodItemCard from './FoodItemCard';

// La función foods siempre devuelve una Promesa, ya que es async/await
// Y dentro de la función se obtiene el menú de fast food desde la API
async function foods() {
  const res = await fetch("https://devsapihub.com/api-fast-food");
  if (!res.ok) throw new Error("Error al obtener el menú");
  return res.json();
}

// Se llama UNA sola vez cuando se renderiza el componente
const menuPromise = foods();

export default function FastFoodMenu() {
  const menu = use(menuPromise); // Espera a que la promesa se resuelva y devuelve el menú

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Menú de Fast Food
        </h2>

        <div className="space-y-6">
          {menu.map(item => (
            <FoodItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
