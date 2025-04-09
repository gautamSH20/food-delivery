import { useEffect } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

import { Quant } from "../components/Quant";
import { TotalPrice } from "../components/TotalPrice";
import { useUserStore } from "../store/useUserStore";

export function Cart() {
  const { user, total, remove, increase, totalPrice, logout } = useUserStore();
  console.log(user);
  useEffect(() => {
    totalPrice();
  }, []);
  return (
    <div>
      <div className="p-8 ">
        Cart{" "}
        <div className="flex justify-between">
          <div className="flex flex-wrap bg-white rounded-sm">
            {user.map((items, key) => (
              <Card
                name={items.name}
                price={items.price}
                size="md"
                quatn={
                  <Quant
                    quant={items.quant}
                    removeitem={() => {
                      remove(items);
                      totalPrice();
                    }}
                    increase={() => {
                      increase(items);
                      totalPrice();
                    }}
                    delete={() => {
                      logout(items);
                      totalPrice();
                    }}
                  />
                }
                key={key}
              />
            ))}
          </div>
          <TotalPrice total={total} />
        </div>
      </div>
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
