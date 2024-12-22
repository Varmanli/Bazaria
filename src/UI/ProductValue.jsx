import React from "react";

function ProductValue({ value }) {
  return (
    <>
      <div className="flex gap-6 justify-between items-center text-red-500 shadow-xl border  rounded-lg  p-1">
        <button className="text-[26px]" onClick={() => value(1)}>
          +
        </button>
        <h1 className="text-[20px]">{value}</h1>
        <button className="text-[26px]">
          {value > 1 ? (
            <p onClick={() => setValue(1)}>-</p>
          ) : (
            <MdDeleteForever onClick={() => ""} />
          )}
        </button>
      </div>
    </>
  );
}

export default ProductValue;
