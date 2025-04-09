import { DownArrow } from "../icon/DownArrow";
import { Trash } from "../icon/Trash";
import { UpArrow } from "../icon/UpArrow";

interface QunatInter {
  quant?: number;
  removeitem?: () => void;
  increase?: () => void;
  delete?: () => void;
}

export function Quant(prop: QunatInter) {
  return (
    <div className="flex items-center relative">
      <div>Quantity:</div>
      <div className="flex items-center ml-2 rounded-md border-1">
        <div>{prop.quant}</div>
        <div>
          <div
            className="hover:bg-blue-200 cursor-pointer rounded-md"
            onClick={prop.increase}
          >
            <UpArrow />
          </div>
          <div
            className="hover:bg-blue-200 cursor-pointer rounded-md"
            onClick={prop.removeitem}
          >
            <DownArrow />
          </div>
        </div>
      </div>
      <div
        className="p-1 rounded-full absolute right-0 border-1 hover:animate-spin1 cursor-pointer "
        onClick={prop.delete}
      >
        <Trash />
      </div>
    </div>
  );
}
