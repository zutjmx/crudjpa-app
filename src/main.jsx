import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProductoApp } from './components/ProductoApp'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductoApp titulo="Productos" subtitulo="Lista de productos disponibles" />
  </StrictMode>,
)
