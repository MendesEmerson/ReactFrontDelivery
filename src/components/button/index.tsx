import { Button, IconProps, Icon } from "@chakra-ui/react";

interface ButtonComponentProps {
  icon?: React.ElementType<IconProps>;
  label: string;
  color?: string;
  onClick?: () => void
}

export function ButtonComponent({ icon, label, onClick, color="blue.400"}: ButtonComponentProps) {
  return (
    <Button
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
