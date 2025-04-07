import { RootState } from "../app/store";
import { Button } from "../components/Button";
import { useSelector } from "react-redux";

export function Cart() {
  const data = useSelector((state: RootState) => state.Cart.data);
  const state = useSelector((state: RootState) => state);
  console.log(state);
  console.log(data);
  return (
    <div>
      Cart{" "}
      {data.map((items, key) => (
        <p key={key}>
          {items.name} {items.price}
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
