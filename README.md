# 🍔 Fast Food Menu - Hook `use()` en Next.js

Una aplicación moderna de menú de comida rápida que demuestra el poder del nuevo hook `use()` de React en Next.js 16.

La idea es poder consumir una API externa sin necesidad de hacer uso de los hooks `useEffect` y `useState`. Una manera más sencilla y moderna de manejar promesas en React.

![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/refs/heads/master/consumir-api-con-use-react19-next16.gif)

## 🚀 Características

- **Hook `use()` de React**: Implementación del nuevo hook experimental para manejo de promesas
- **Next.js 16**: Última versión con soporte para React 19
- **Tailwind CSS**: Diseño moderno y responsivo
- **React Icons**: Iconografía profesional
- **API Externa**: Consumo de datos desde `devsapihub.com`

## 🎯 ¿Qué es el Hook `use()`?

El hook `use()` es una nueva característica experimental de React que permite:

### ✅ Beneficios Principales

1. **Simplificación del Código**: Elimina la necesidad de `useEffect` + `useState` para fetching
2. **Suspense Nativo**: Funciona perfectamente con React Suspense
3. **Menos Boilerplate**: Reduce significativamente la cantidad de código
4. **Mejor UX**: Manejo automático de estados de carga
5. **Server Components**: Compatible con componentes de servidor

### 📝 Comparación: Antes vs Ahora

#### ❌ Método Tradicional (useEffect + useState)
```javascript
function Menu() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/menu')
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <MenuList data={data} />;
}
```

#### ✅ Con Hook `use()` (Moderno)
```javascript
function Menu() {
  const data = use(fetchMenu()); // ¡Solo una línea!
  return <MenuList data={data} />;
}
```

## 🚀 Instalación y Uso

```bash
# Clonar el repositorio
git clone <repo-url>

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🔄 Flujo de Datos

1. **Suspense** envuelve el componente FastFoodMenu
2. **Hook `use()`** ejecuta la promesa de fetchMenu()
3. **Suspense** muestra el fallback mientras se resuelve
4. **Componente** se renderiza con los datos obtenidos

## 🌟 Ventajas del Hook `use()`

- **Código más limpio**: Menos líneas, más legible
- **Mejor performance**: Optimizaciones automáticas
- **Error boundaries**: Manejo de errores simplificado
- **Concurrent features**: Compatible con React 18+ features
- **Future-proof**: Preparado para el futuro de React

