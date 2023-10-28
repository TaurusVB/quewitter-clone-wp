import { ChangeEvent, ReactElement } from "react";
import { IconType } from "react-icons/lib";

export interface ISidebarItemProps {
  href?: string;
  label: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}

export interface IHeaderProps {
  label: string;
  showBackArrow?: boolean;
}

export interface IButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

export interface IModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

export interface IInputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IHooksModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export interface IAvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}
