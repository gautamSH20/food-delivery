import { ReactElement } from "react";

interface buttonInput {
  title: string;
  variant: "primary" | "secandary";
  onclick: () => void;
  smeCss?: string;
  size: "lg" | "md";
  iconFront?: ReactElement;
  iconBack?: ReactElement;
  someCss?: string;
}

const variantPrp = {
  primary: "bg-[#0ab75b] ",
  secandary: "bg-[#00a377]",
};
const styleSize = {
  lg: "px-6 py-4 text-xl rounded-xl",
  md: "px-4 py-2 text-md rounded-md",
};

export function Button(prop: buttonInput) {
  return (
    <div>
      <button
        className={`${
          variantPrp[prop.variant]
        }  text-white rounded-md cursor-pointer ${prop.smeCss} ${
          styleSize[prop.size]
        } ${prop.someCss}`}
        onClick={prop.onclick}
      >
        <div className="flex relative group items-center">
          {/* to do this thing to make it visible on hover  */}
          <span className="translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {prop.iconFront ? prop.iconFront : null}
          </span>
          {prop.title}
          {prop.iconBack ? prop.iconBack : null}
        </div>
      </button>
    </div>
  );
}
