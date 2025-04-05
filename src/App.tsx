import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { NavBottomBar } from "./components/NavBottomBar";
import { Home } from "./page/Home";
import { Cart } from "./page/Cart";
import { Menu } from "./page/Menu";

// Have to create 2 more menu and cart inside cart is going to be a checkout page

function App() {
  return (
    <div className="bg-gray-200">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
      <NavBottomBar />
    </div>
  );
}

export default App;
