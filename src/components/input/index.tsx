import { Input, SystemStyleObject } from "@chakra-ui/react";

interface IImputComponent{
  border: string;
  borderRadius: string;
  placeholder: string;
  type?: string;
  _hover: SystemStyleObject;
}

export function InputComponent({border,borderRadius,placeholder,type,_hover}:IImputComponent){
  return(
    <Input type={type} border={border} borderRadius={borderRadius} placeholder={placeholder} _hover={_hover}
    />

  )
}