import { Banner } from "../components/Banner";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Cate } from "../components/Cate";
import { Burgur } from "../icon/Burgur";
import { Drinks } from "../icon/Drinks";
import { PizzaIcon } from "../icon/Pizzaicon";
// import { addToCart } from "../features/Cart/cartSlice";
// import { useAppDispatch } from "../app/hooks";
import { useContext } from "react";
import { UserContext } from "../context/use-counte";
import { useUserStore } from "../store/useUserStore";

export function Home() {
  const { login } = useUserStore();
  return (
    <div>
      <Banner />
      <div className="w-full p-2 mt-2 bg-white">
        <p className="text-xl">Food Categories</p>
        <div className="flex justify-center items-center flex-wrap">
          <Cate name="Pizza" icon={<PizzaIcon />} />
          <Cate name="Burgur" icon={<Burgur />} />
          <Cate name="Drinks" icon={<Drinks />} />
        </div>
      </div>
      <div className="bg-white mt-3">
        <p className="text-lg mb-2"> populor food items of the day </p>
        <div className="flex justify-center items-center flex-wrap">
          <Card
            name="pizza"
            size="lg"
            price={300}
            button1={
              <Button
                title="add to cart"
                variant="secandary"
                onclick={() => {}}
                size="md"
              />
            }
          />
          <Card
            name="pizza2"
            size="lg"
            price={400}
            button1={
              <Button
                title="add to cart"
                variant="secandary"
                size="md"
                onclick={() => {
                  const data = {
                    name: "pizza33",
                    price: 30,
                    quant: 1,
                  };
                  login(data);
                }}
              />
            }
          />
          <Card name="pizza3" size="lg" price={100} />
          <Card name="pizza4" size="lg" price={99} />
        </div>
      </div>
    </div>
  );
}
