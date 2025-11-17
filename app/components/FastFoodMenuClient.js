// Componente del lado del cliente, es decir que ejecuta en el navegador del usuario.
'use client';
import { use } from 'react';
import FoodItemCard from './FoodItemCard';

// 🔥 Promesa memoizada fuera del componente
const menuPromise = fetch("https://devsapihub.com/api-fast-food")
  .then(res => res.json())
  .catch(err => console.error("Error al obtener el menú", err));

// Componente para mostrar el menú de fast food
export default function FastFoodMenu() {
  const menu = use(menuPromise);
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Menú de Fast Food</h2>
        <div className="space-y-6">
          {menu.map(item => (
            <FoodItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
