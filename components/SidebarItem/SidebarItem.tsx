// @flow
import { ISidebarItemProps } from "@/utils/types";
import React from "react";

const SidebarItem: React.FC<ISidebarItemProps> = ({
  href,
  label,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <Icon size={28} color="white" />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full cursor-pointer hover:bg-slate-300 hover:bg-opacity-10">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
