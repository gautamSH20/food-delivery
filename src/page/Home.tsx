import { Banner } from "../components/Banner";
import { Card } from "../components/Card";
import { Cate } from "../components/Cate";
import { Burgur } from "../icon/Burgur";
import { Drinks } from "../icon/Drinks";
import { PizzaIcon } from "../icon/Pizzaicon";

export function Home() {
  return (
    <div>
      <Banner />
      <div className="w-full p-2 mt-2 bg-white">
        <p className="text-xl">Food Categories</p>
        <div className="flex justify-center items-center flex-wrap">
          <Cate name="pizza" icon={<PizzaIcon />} />
          <Cate name="Burgur" icon={<Burgur />} />
          <Cate name="Drinks" icon={<Drinks />} />
        </div>
      </div>
      <div className="bg-white mt-3">
        <p className="text-lg mb-2"> populor food items of the day </p>
        <div className="flex justify-center items-center flex-wrap">
          <Card name="pizza" size="lg" price={300} />
          <Card name="pizza2" size="lg" price={400} />
          <Card name="pizza3" size="lg" price={100} />
          <Card name="pizza4" size="lg" price={99} />
        </div>
      </div>
    </div>
  );
}
