import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { NavBottomBar } from "./components/NavBottomBar";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Menu } from "./pages/Menu";

function App() {
  return (
    <div className="bg-gray-200">
      <BrowserRouter>
        <div className="z-40">
          <NavBar />
        </div>
        <div className="z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
        <div className="z-30">
          <NavBottomBar />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
