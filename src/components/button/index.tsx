import { Button, IconProps } from "@chakra-ui/react";

interface ButtonComponentProps {
  icon: React.ElementType<IconProps>;
  label: string;
  onClick?: () => void
}

export function ButtonComponent({ icon: IconComponent, label, onClick}: ButtonComponentProps) {
  return (
    <Button
      variant={"outline"}
      margin={"0 10px"}
      width={"100%"}
      height={"35px"}
      bg={"blue.300"}
      onClick={onClick}
    >
      <IconComponent marginRight={4} />
      {label}
    </Button>
  );
}
