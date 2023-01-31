
import './App.css';
import Inicio from "./Paginas/Inicio"
import SobreMim from "./Paginas/SobreMim"
import Not404 from "./Paginas/Not404"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from './Componentes/Menu';

export default function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>  
        <Route path='*' element={<Not404/>}/>    
        <Route path='/sobremim' element={<SobreMim/>}/>  
      </Routes>
    </BrowserRouter>
  );
}
