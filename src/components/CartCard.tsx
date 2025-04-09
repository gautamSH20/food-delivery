export function CratCard() {
  return (
    <div className="p-4 bg-white m-3 flex justify-between h-50 relative">
      <div className="absolute right-0">X</div>
      <div>
        <div className="flex ">
          <div className="border-2 w-40 mr-3">Image</div>
          <div>
            <div>name</div>
            <div>Despriton</div>
          </div>
        </div>

        <div className="flex flex-col justify-between ">
          <div>quantity</div>
        </div>
      </div>
    </div>
  );
}
