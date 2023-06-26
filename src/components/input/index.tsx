import { Input } from "@chakra-ui/react";
import { IImputComponent } from "../../interfaces/components/inputComponent";


export function InputComponent({ border, borderRadius, placeholder, type, value, onChange, _hover }: IImputComponent) {
  return (
    <Input type={type} value={value} onChange={onChange} border={border} borderRadius={borderRadius} placeholder={placeholder} _hover={_hover}
    />

  )
}