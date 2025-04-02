import { ReactElement } from "react";

interface Cateinput {
  name: string;
  icon: ReactElement;
}

export function Cate(prop: Cateinput) {
  return (
    <div className="w-fit flex flex-col items-center cursor-pointer group">
      <div className=" border-1 inset-shadow-green-300 inset-shadow-sm rounded-full">
        {prop.icon}
      </div>
      <div className="text-lg group-hover:text-green-600">{prop.name}</div>
    </div>
  );
}
