import './App.css';
import Products from './Components/Allproduct/Products';
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from './Components/Cart/Cart';
import { useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {
  AOS.init();
  const [count, setCount] = useState(0)
  const UpdateCart = () => {
    setCount(count + 1)
  };
  // console.log(UpdateCart());
  return (
    <div className="App">
      <Cart count = {count}></Cart>
      <Products setCount = {UpdateCart}></Products>
    </div>
  );
}

export default App;
