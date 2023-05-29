import { Button, IconProps, Icon } from "@chakra-ui/react";

interface ButtonComponentProps {
  icon?: React.ElementType<IconProps>;
  label: string;
  color?: string;
  type: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}

export function ButtonComponent({ icon, label, onClick, type, color = "blue.400" }: ButtonComponentProps) {
  return (
    <Button
      type={type}
      variant={"outline"}
      margin={"0 10px"}
      width={"100%"}
      height={"35px"}
      bg={color}
      onClick={onClick}
    >
      <Icon as={icon} marginRight={4} />
      {label}
    </Button>
  );
}
