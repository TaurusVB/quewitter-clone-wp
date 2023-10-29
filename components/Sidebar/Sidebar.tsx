import { useMemo } from "react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import { signOut } from "next-auth/react";

import SidebarLogo from "../SidebarLogo";
import SidebarItem from "../SidebarItem";
import SideBarTweetButton from "../SideBarTweetButton";
import useCurrentUser from "@/hooks/useCurrentUser";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = useMemo(
    () => [
      { label: "Home", href: "/", icon: BsHouseFill, auth: false },
      {
        label: "Notification",
        href: "/notifications",
        icon: BsBellFill,
        auth: true,
        alert: currentUser?.hasNotification,
      },
      {
        label: "Profile",
        href: `/users/${currentUser?.id}`,
        icon: FaUser,
        auth: true,
      },
    ],
    [currentUser?.hasNotification, currentUser?.id]
  );

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map(({ href, label, icon, auth, alert }) => (
            <SidebarItem
              key={href}
              href={href}
              label={label}
              icon={icon}
              auth={auth}
              alert={alert}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label="Logout"
            />
          )}
          <SideBarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
