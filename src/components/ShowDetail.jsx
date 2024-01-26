import React from "react";
import nike1 from "../assets/n1-min.png";

const ShowDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      <div className="flex-1 lg:-mt-32 lg:ml-28 ">
        <div className=" flex-auto h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={nike1} />
        </div>
      </div>
      <div className=" flex-1 space-y-6">
        <div className=" text-5xl font-black md:text-9xl">Nike Air max 270</div>
        <div className=" font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."
          }
        </div>
        <div className=" text-3xl font-extrabold md:text-6xl">100$</div>
        <div className=" space-x-10">
          <button className=" h-14 w-44 bg-black text-white hover:bg-gray-400">
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
