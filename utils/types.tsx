import { IconType } from "react-icons/lib";

export interface ISidebarItemProps {
  href: string;
  label: string;
  icon: IconType;
  onClick?: () => void;
}
