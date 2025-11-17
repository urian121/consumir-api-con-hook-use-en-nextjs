// Componente del lado del servidor, es decir que ejecuta en el servidor de Next.js, no en el navegador.
import { use } from 'react';
import FoodItemCard from './FoodItemCard';

// Función para obtener el menú de fast food desde la API
async function fetchMenu() {
  const res = await fetch("https://devsapihub.com/api-fast-food", { next: { revalidate: 60 } }); // cachea 1 min
  if (!res.ok) throw new Error("Error al obtener el menú");
  return res.json();
}

// Componente para mostrar el menú de fast food
export default function FastFoodMenu() {
  const menu = use(fetchMenu());
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
