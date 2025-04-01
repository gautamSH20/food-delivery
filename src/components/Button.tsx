interface buttonInput {
  title: string;
  variant: "primary" | "secandary";
  onclick: () => void;
  smeCss?: string;
  size: "lg" | "md";
}

const variantPrp = {
  primary: "bg-[#0ab75b] ",
  secandary: "bg-[#00a377]",
};
const styleSize = {
  lg: "px-8 py-4 text-xl rounded-xl",
  md: "px-6 py-2 text-md rounded-md",
};

export function Button(prop: buttonInput) {
  return (
    <div>
      <button
        className={`${
          variantPrp[prop.variant]
        }  text-white rounded-md cursor-pointer ${prop.smeCss} ${
          styleSize[prop.size]
        }`}
        onClick={prop.onclick}
      >
        {prop.title}
      </button>
    </div>
  );
}
