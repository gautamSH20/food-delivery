interface Tota {
  total?: number;
}

export function TotalPrice(prop: Tota) {
  return (
    <div>
      <div className="text-center h-70 w-70 text-2xl rounded-md bg-white items-center flex">
        <div>
          Total Price Of Your Order are<br></br>
          <span className="p-2 shadow-md rounded-md">
            Total:{prop.total ? prop.total : 0}
          </span>
        </div>
      </div>
    </div>
  );
}
