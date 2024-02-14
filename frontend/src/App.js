import logo from './logo.svg';
import './App.css';
import Product from './pages/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './pages/Category';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Product />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/category" element={<Category />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
