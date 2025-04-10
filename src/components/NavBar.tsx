import { useState } from "react";
import { Carticon } from "../icon/Carticon";
import { Foodicon } from "../icon/Foodicon";
import { Homeicon } from "../icon/Homeicon";
import { Menuicon } from "../icon/Menuicon";
import { Button } from "./Button";
import { Close } from "../icon/Close";
import { useNavigate } from "react-router-dom";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const taiwindForTab =
    "flex p-1   hover:bg-linear-to-t hover:from-green-300 hover:to-green-500";
  function toggle() {
    setIsMenuOpen((e) => (e = !e));
  }
  function homeNavi() {
    navigate("/");
  }
  function menuNavi() {
    navigate("/menu");
  }
  function cartNavi() {
    navigate("/cart");
  }
  return (
    <div className="flex justify-center mb-1 relative z-50">
      <div className="bg-green-400 rounded-md p-2 md:w-300 w-90 ">
        <div className="flex justify-between items-center ">
          <Button
            title="Food Delivery"
            variant="primary"
            size="lg"
            onclick={() => {
              homeNavi();
            }}
            iconBack={<Foodicon />}
          />
          <div className="md:flex hidden">
            <Button
              title="Home"
              variant="primary"
              size="md"
              onclick={() => {
                homeNavi();
              }}
              iconFront={<Homeicon />}
              someCss="mr-1"
            />
            <Button
              title="Menu"
              variant="primary"
              size="md"
              onclick={() => {
                menuNavi();
              }}
              iconFront={<Menuicon />}
              someCss="mr-1"
            />
            <Button
              title="Cart"
              variant="primary"
              size="md"
              onclick={() => {
                cartNavi();
              }}
              iconFront={<Carticon />}
              someCss="mr-1"
            />
          </div>
          <div className="md:hidden " onClick={toggle}>
            {isMenuOpen ? <Close /> : <Menuicon />}
          </div>
        </div>
        {isMenuOpen && (
          <div className=" w-30 md:hidden bg-green-300 rounded-sm absolute translate-x-50 -translate-y-5">
            <div className={`${taiwindForTab}`} onClick={homeNavi}>
              <Homeicon />
              Home
            </div>
            <div className={`${taiwindForTab}`} onClick={menuNavi}>
              <Foodicon /> Menu
            </div>
            <div className={`${taiwindForTab}`} onClick={cartNavi}>
              <Carticon />
              Cart
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
