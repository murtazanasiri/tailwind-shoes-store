import React from "react";

import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QYT, SIZES } from "../constant";

const CartItem = ({ item: { product, qty, size } }) => {
  return (
    <div className=" hover:bg-[#DAFFA2] p-2 cursor-pointer space-y-2 bg-gray-50">
      <div className=" flex  space-x-2">
        <img className=" h-24" src={product.src}></img>
        <div className=" space-y-2">
          <div className=" font-bold">{product.title}</div>
          <div className=" text-sm text-gray-400">{product.description}</div>
        </div>
        <div className=" font-bold">{product.price}</div>
      </div>

      <div className=" flex justify-between">
        <div className=" flex space-x-6 pl-32">
          <div>
            <div className=" font-bold">SIZE</div>
            <Select
              defaultValue={size}
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
              arrowPosition={"pr-3 pt-2 "}
            />
          </div>
          <div>
            <div className=" font-bold">QTY</div>
            <Select
              defaultValue={qty}
              title=""
              options={QYT}
              className={"w-16 p-1 pl-2"}
              arrowPosition={"pr-3 pt-2"}
            />
          </div>
        </div>
        <button>
          {" "}
          <CiTrash size={25} className=" text-black" />{" "}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
