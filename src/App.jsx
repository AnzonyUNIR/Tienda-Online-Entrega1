import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importamos el Layout y las Páginas
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Todas estas rutas compartirán el MainLayout (Navbar y Footer) */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Ruta página de inicio */}
          <Route index element={<Home />} />
          
          {/* Ruta catálogo */}
          <Route path="catalogo" element={<Catalog />} />
          
          {/* Ruta detalles */}
          <Route path="producto/:id" element={<ProductDetail />} />
          
          {/* Ruta extra */}
          <Route path="nosotros" element={<About />} />
          
          {/* Ruta 404  */}
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;