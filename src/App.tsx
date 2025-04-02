import "./App.css";

import { NavBar } from "./components/NavBar";
import { NavBottomBar } from "./components/NavBottomBar";
import { Home } from "./page/Home";

// Have to create 2 more menu and cart inside cart is going to be a checkout page

function App() {
  return (
    <div className="bg-gray-200">
      <NavBar />
      <Home />
      <NavBottomBar />
    </div>
  );
}

export default App;
