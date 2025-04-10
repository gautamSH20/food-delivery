import Marquee from "react-fast-marquee";
import { useUserStore } from "../store/useUserStore";
import { Card } from "./Card";
import { Button } from "./Button";
import { Carticon } from "../icon/Carticon";
interface MenuRespon {
  data: User[];
}
interface User {
  name: string;
  price: number;
  quant: number;
}

export function MenuRespon({ data }: MenuRespon) {
  const { login } = useUserStore();
  return (
    <Marquee pauseOnHover>
      {data.map((item, key) => (
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
    </Marquee>
  );
}
