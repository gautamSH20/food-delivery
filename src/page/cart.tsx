import { RootState } from "../app/store";
import { Button } from "../components/Button";
import { useAppSelector } from "../app/hooks";
import { useContext } from "react";
import { UserContext } from "../context/use-counte";
import { useUserStore } from "../store/useUserStore";

export function Cart() {
  const { user, logout } = useUserStore();
  console.log(user);
  return (
    <div>
      Cart{" "}
      {user.map((items, key) => (
        <p key={key}>
          {items.name} {items.price} {items.quant}
          <button
            className="p-2 bg-blue-200"
            onClick={() => {
              console.log(items);
              logout(items);
            }}
          >
            Click to remove
          </button>
        </p>
      ))}
      <div className="w-full bg-white"></div>
      <div className="bg-white mt-3 flex justify-center ">
        <div className="flex flex-col items-center">
          <span>If you are Ready to checkout</span>
          <Button
            title="Checkout"
            onclick={() => {
              console.log("checkout");
            }}
            variant="primary"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}
