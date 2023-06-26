import { SystemStyleObject } from "@chakra-ui/react";

export interface IImputComponent {
    border: string;
    borderRadius: string;
    placeholder: string;
    type?: string;
    _hover: SystemStyleObject;
    value: string | number
    onChange: (e:any) => void
  }