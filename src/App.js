import { useState } from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  const [carts, setCarts] = useState(0)
  const count = ()=>{
    return setCarts (carts + 1);
  }
  // console.log(carts);
  return (
    <div>
        <Navbar carts={carts}></Navbar>
        <Home count={count}></Home>
    </div>
  );
}

export default App;
