import { Banner } from "../components/Banner";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Cate } from "../components/Cate";
import { Burgur } from "../icon/Burgur";
import { Carticon } from "../icon/Carticon";
import { Drinks } from "../icon/Drinks";
import { PizzaIcon } from "../icon/Pizzaicon";
// import { addToCart } from "../features/Cart/cartSlice";
// import { useAppDispatch } from "../app/hooks";

import { useUserStore } from "../store/useUserStore";

export function Home() {
  const { login } = useUserStore();
  const product = [
    { name: "Margrita Pizza", price: 100, quant: 1 },
    { name: "ALOO TIKI", price: 35, quant: 1 },
    { name: "Peparoni", price: 250, quant: 1 },
    { name: "Chicken sandwish", price: 70, quant: 1 },
  ];
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
          {product.map((item, key) => (
            <Card
              size="md"
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
                  }}
                />
              }
              key={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
