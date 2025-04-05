import { Card } from "../components/Card";

export function Menu() {
  return (
    <div>
      <div className="bg-white p-2">
        <div className="text-2xl">Pizza</div>
        <div className="flex flex-wrap justify-center items-center">
          <Card name="Perparoni" price={200} size="lg" />
          <Card name="Perparoni" price={200} size="lg" />
          <Card name="Perparoni" price={200} size="lg" />
          <Card name="Perparoni" price={200} size="lg" />
          <Card name="Perparoni" price={200} size="lg" />
          <Card name="Perparoni" price={200} size="lg" />
          <Card name="Perparoni" price={200} size="lg" />
          <Card name="Perparoni" price={200} size="lg" />
          <Card name="Perparoni" price={200} size="lg" />
          <Card name="Perparoni" price={200} size="lg" />
        </div>
      </div>
      <div className="bg-white p-2 mt-3">
        <p className="text-2xl">Burgur</p>
        <div className="flex flex-wrap justify-center">
          <Card name="Burgur" price={50} size="lg" />
          <Card name="Burgur" price={50} size="lg" />
          <Card name="Burgur" price={50} size="lg" />
          <Card name="Burgur" price={50} size="lg" />
          <Card name="Burgur" price={50} size="lg" />
          <Card name="Burgur" price={50} size="lg" />
          <Card name="Burgur" price={50} size="lg" />
          <Card name="Burgur" price={50} size="lg" />
          <Card name="Burgur" price={50} size="lg" />
          <Card name="Burgur" price={50} size="lg" />
        </div>
      </div>
      <div className="bg-white p-2 mt-3">
        <p className="text-2xl">Drinks</p>
        <div className="flex flex-wrap justify-center">
          <Card name="Drink" price={30} size="lg" />
          <Card name="Drink" price={30} size="lg" />
          <Card name="Drink" price={30} size="lg" />
          <Card name="Drink" price={30} size="lg" />
          <Card name="Drink" price={30} size="lg" />
          <Card name="Drink" price={30} size="lg" />
        </div>
      </div>
    </div>
  );
}
