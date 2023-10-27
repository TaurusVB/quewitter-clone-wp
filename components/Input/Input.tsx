import { IInputProps } from "@/utils/types";
import React, { FC } from "react";

const Input: FC<IInputProps> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      type={type}
      disabled={disabled}
      onChange={onChange}
      className="w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-900/70 disabled:cursor-not-allowed"
    />
  );
};

export default Input;
