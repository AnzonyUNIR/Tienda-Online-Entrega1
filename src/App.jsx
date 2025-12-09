import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>    
        <Route path="/" element={<MainLayout />}>
    
          <Route index element={<Home />} />
    
          <Route path="catalogo" element={<Catalog />} />
   
          <Route path="producto/:id" element={<ProductDetail />} />
  
          <Route path="nosotros" element={<About />} />
  
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;