import React, { useEffect, useState } from "react";

function Product() {
  const [count, setCount] = useState(1);
  function handleInc() {
    setCount((c) => c + 1);
    console.log(count);
  }
  function handleDec() {
    if (count < 1) return ;
    setCount((c) => c - 1);
    console.log(count);
  }
  useEffect(
    function () {

    },
    [count],
  );
  return (
    <div className="flex flex-col p-4 mx-auto max-w-screen-sm items-center">
      <div className="w-40">
        <img src="data:image/jpeg;base64,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" />
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-xl p-2 m-3">%Name% Perfume</h1>
        <div className="flex w-full gap-5">
          <div className="flex items-center justify-between gap-5">
            <button
              className="flex items-center ring-1 ring-blue-400 hover:bg-blue-400 hover:text-white py-2 px-4 rounded-full transition-all duration-300"
              onClick={() => handleDec()}
            >
              -
            </button>
            <input
              type="number"
              value={count}
              className="w-11 ring-1 bg-slate-100 rounded-xl py-2 px-4 font-bold"
            />
            <button
              className="flex items-center ring-1 ring-blue-400 hover:bg-blue-400 hover:text-white py-2 px-4 rounded-full transition-all duration-300"
              onClick={() => handleInc()}
            >
              +
            </button>
          </div>
          <button className="bg-blue-400 text-white rounded-xl py-3 px-6 hover:bg-blue-600 transition-all duration-300">
            Add to cart
          </button>
        </div>
        <div className="my-3 px-4 py-2">
          <span className="font-bold text-gray-600">Description</span>
          <p className="text-gray-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            distinctio corporis fugit soluta repellat, harum quia, autem
            voluptatibus adipisci qui, incidunt temporibus porro praesentium
            voluptatem odit recusandae dignissimos eius dicta!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
