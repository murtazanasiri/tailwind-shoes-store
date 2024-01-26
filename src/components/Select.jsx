import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

const Select = ({
  title,
  options,
  className,
  arrowPosition,
  onChange,
  value,
}) => {
  return (
    <div className=" relative">
      <select
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        className={twMerge(
          `w-24 appearance-none border border-gray-300 p-4 ${className}`
        )}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 p-5 ${arrowPosition} `}
      >
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;
