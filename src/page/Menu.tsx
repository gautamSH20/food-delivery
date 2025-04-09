import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Carticon } from "../icon/Carticon";
import { useUserStore } from "../store/useUserStore";

export function Menu() {
  const { login } = useUserStore();
  const Pizzas = [
    { name: "Onion pizza", price: 100, quant: 1 },
    { name: "Tomato pizza", price: 100, quant: 1 },
    { name: "Paneer pizza", price: 100, quant: 1 },
    { name: "Margrita Pizza", price: 100, quant: 1 },
    { name: "Farhmhouse Pizza", price: 100, quant: 1 },
    { name: "Chiken Pizza", price: 180, quant: 1 },
    { name: "Ham Pizza", price: 200, quant: 1 },
    { name: "Lamb Pizza", price: 300, quant: 1 },
    { name: "Peparoni", price: 250, quant: 1 },
  ];
  const Burgur = [
    { name: "ALOO TIKI", price: 35, quant: 1 },
    { name: "Double ALOO TIKI", price: 70, quant: 1 },
    { name: "Cheese Burgur", price: 40, quant: 1 },
    { name: "Double Cheese Burgur", price: 80, quant: 1 },
    { name: "Jambo veg", price: 60, quant: 1 },
    { name: "Chicken sandwish", price: 70, quant: 1 },
    { name: "Chicken Burgur", price: 100, quant: 1 },
    { name: "Cheese Chiken Burgur", price: 130, quant: 1 },
    { name: "Turckey Burgur", price: 130, quant: 1 },
    { name: "Jambo non-veg", price: 150, quant: 1 },
  ];
  const Drinks = [
    { name: "Coke", price: 30, quant: 1 },
    { name: "Pepsi", price: 30, quant: 1 },
    { name: "Fruit beer", price: 40, quant: 1 },
    { name: "Diet Coke", price: 30, quant: 1 },
    { name: "Thumbs up", price: 30, quant: 1 },
    { name: "Sprite", price: 30, quant: 1 },
  ];
  return (
    <div>
      <div className="bg-white p-2">
        <div className="text-2xl">Pizza</div>
        <div className="flex flex-wrap justify-center items-center">
          {Pizzas.map((item, key) => (
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
      <div className="bg-white p-2 mt-3">
        <p className="text-2xl">Burgur</p>
        <div className="flex flex-wrap justify-center">
          {Burgur.map((item, key) => (
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
      <div className="bg-white p-2 mt-3">
        <p className="text-2xl">Drinks</p>
        <div className="flex flex-wrap justify-center">
          {Drinks.map((item, key) => (
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
