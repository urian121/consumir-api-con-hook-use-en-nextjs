import { Suspense } from "react";
import FastFoodMenu from "./components/FastFoodMenu";

export default function Home() {
  return (
    <>
      <Suspense fallback={
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg font-medium">Cargando menú...</p>
          </div>
        </div>
      }>
        <FastFoodMenu />
      </Suspense>
    </>
  );
}
