import { Carticon } from "../icon/Carticon";
import { Foodicon } from "../icon/Foodicon";
import { Homeicon } from "../icon/homeicon";
import { Menuicon } from "../icon/Menuicon";
import { Button } from "./Button";

export function NavBar() {
  return (
    <div className="flex justify-center mb-1">
      <div className="bg-green-400 rounded-md p-2 w-300  ">
        <div className="flex justify-between items-center">
          <Button
            title="Food Delivery"
            variant="primary"
            size="lg"
            onclick={() => {}}
            iconBack={<Foodicon />}
          />
          <div className="flex">
            <Button
              title="Home"
              variant="primary"
              size="md"
              onclick={() => {
                console.log("home");
              }}
              iconFront={<Homeicon />}
              someCss="mr-1"
            />
            <Button
              title="Menu"
              variant="primary"
              size="md"
              onclick={() => {
                console.log("Menu");
              }}
              iconFront={<Menuicon />}
              someCss="mr-1"
            />
            <Button
              title="Cart"
              variant="primary"
              size="md"
              onclick={() => {
                console.log("Cart");
              }}
              iconFront={<Carticon />}
              someCss="mr-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
