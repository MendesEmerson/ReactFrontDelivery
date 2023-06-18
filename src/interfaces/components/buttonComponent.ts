import { IconProps } from "@chakra-ui/react";

export interface ButtonComponentProps {
    icon?: React.ElementType<IconProps>;
    label: string;
    color?: string;
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
  }