import { Input, SystemStyleObject } from "@chakra-ui/react";

interface IImputComponent {
  border: string;
  borderRadius: string;
  placeholder: string;
  type?: string;
  _hover: SystemStyleObject;
  value: string | number
  onChange: (e:any) => void
}

export function InputComponent({ border, borderRadius, placeholder, type, value, onChange, _hover }: IImputComponent) {
  return (
    <Input type={type} value={value} onChange={onChange} border={border} borderRadius={borderRadius} placeholder={placeholder} _hover={_hover}
    />

  )
}