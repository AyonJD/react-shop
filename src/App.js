import './App.css';
import Products from './Components/Allproduct/Products';
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from './Components/Cart/Cart';
import { useState } from 'react';

function App() {
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
