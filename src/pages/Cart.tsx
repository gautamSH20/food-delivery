import { useEffect } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

import { Quant } from "../components/Quant";
import { TotalPrice } from "../components/TotalPrice";
import { useUserStore } from "../store/useUserStore";
import { Carticon2, Carticon } from "../icon/Carticon";

export function Cart() {
  const { user, total, remove, increase, totalPrice, logout, login } =
    useUserStore();

  useEffect(() => {
    totalPrice();
  }, []);
  const product = [
    { name: "Margrita Pizza", price: 100, quant: 1 },
    { name: "ALOO TIKI", price: 35, quant: 1 },
    { name: "Peparoni", price: 250, quant: 1 },
    { name: "Chicken sandwish", price: 70, quant: 1 },
  ];
  return (
    <div>
      <div className="p-8">
        <div className="flex justify-center text-2xl ">
          <div className="p-2 bg-white w-fit rounded flex items-center">
            {" "}
            <Carticon2 /> Cart
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="flex mt-2 flex-wrap bg-white rounded-sm">
            {user.length > 0 ? (
              user.map((items, key) => (
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
              ))
            ) : (
              <div className="text-2xl p-2">
                <div className=" flex text-cenetr opacity-50">
                  There Is nothing in the Cart Add something to it
                </div>
                <div className="flex justify-center items-center flex-wrap">
                  {product.map((item, key) => (
                    <Card
                      size="sm"
                      name={item.name}
                      price={item.price}
                      button1={
                        <Button
                          title="Add to cart"
                          iconFront={<Carticon />}
                          variant="primary"
                          size="md"
                          onclick={() => {
                            login(item);
                            totalPrice();
                          }}
                        />
                      }
                      key={key}
                    />
                  ))}
                </div>
              </div>
            )}
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
              alert("This page will be made");
            }}
            variant="primary"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}
