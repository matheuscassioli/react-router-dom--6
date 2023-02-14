
import './App.css';
import Inicio from "./Paginas/Inicio"
import SobreMim from "./Paginas/SobreMim"
import Not404 from "./Paginas/Not404"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './Componentes/Menu';
import Footer from 'Componentes/Footer';
import PageDefault from 'Componentes/PageDefaut';
import Post from "Paginas/Post"

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>

        <Route path='/' element={<PageDefault />}>
          <Route path='/' element={<Inicio />} />
          <Route path='/sobremim' element={<SobreMim />} />
          <Route path='/posts/:id' element={<Post />} />
        </Route>

        <Route path='*' element={<Not404 />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
