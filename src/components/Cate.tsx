import { ReactElement } from "react";

interface Cateinput {
  name: string;
  icon: ReactElement;
  onclick?: () => void;
}

export function Cate(prop: Cateinput) {
  return (
    <div
      className="w-fit flex flex-col items-center cursor-pointer group m-2"
      onClick={prop.onclick}
    >
      <div className=" border-1 border-green-300 hover:shadow-green-300 hover:shadow-md rounded-full tasition-all duration-300">
        {prop.icon}
      </div>
      <div className="text-lg group-hover:text-green-600">{prop.name}</div>
    </div>
  );
}
