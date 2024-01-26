import React from "react";

const Card = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className={`${item.className} max-w-xl cursor-pointer transform transition hover:scale-105`}
    >
      <div className=" p-8">
        <div className=" text-2xl font-bold">{item.title}</div>
        <div className=" underline underline-offset-4 font-semibold mt-10">
          SHOW NOW +
        </div>
      </div>
      <img className=" h-40 w-56 absolute top-5 left-[40%]" src={item.src} />
    </div>
  );
};

export default Card;
