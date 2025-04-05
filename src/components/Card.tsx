import { ReactElement } from "react";

interface CardProp {
  name: string;
  size: "lg" | "md" | "sm";
  price: number;
  imgsrc?: string;
  button1?: ReactElement;
}

const styleSize = {
  lg: "px-6 py-2 text-xl rounded-xl",
  md: "px-4 py-1 text-md rounded-md",
  sm: "px-2 py-1 text-sm rounded-xs",
};

export function Card(prop: CardProp) {
  return (
    <div
      className={`${
        styleSize[prop.size]
      } border-2 border-green-300 w-fit m-2 cursor-pointer hover:shadow-md hover:shadow-gray-400 tansition-all duration-300`}
    >
      <img
        src={`${
          prop.imgsrc
            ? prop.imgsrc
            : "https://cdn.dribbble.com/userupload/19671725/file/original-510b61d9f20a27244a148c4aa43774c8.gif"
        }`}
        className="h-40 w-40 shadow-md"
      />
      <div>
        <p>{prop.price}</p>
        <p>{prop.name}</p>
        {prop.button1 ? prop.button1 : null}
      </div>
    </div>
  );
}
