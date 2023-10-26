import { useMemo } from "react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import SidebarLogo from "../SidebarLogo";
import SidebarItem from "../SidebarItem";
import SideBarTweetButton from "../SideBarTweetButton";

const Sidebar = () => {
  const items = useMemo(
    () => [
      { label: "Home", href: "/", icon: BsHouseFill },
      { label: "Notification", href: "/notification", icon: BsBellFill },
      { label: "Profile", href: "/users/123", icon: FaUser },
    ],
    []
  );

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map(({ href, label, icon }) => (
            <SidebarItem key={href} href={href} label={label} icon={icon} />
          ))}
          <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
          <SideBarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
