import { Flex } from "@chakra-ui/react";
import { HeaderComponent } from "../header/indes";
import { Outlet } from "react-router-dom";



export function LayoutComponent(){
  return(
    <Flex height={"100vh"} width={"100%"}justifyContent={"center"} minHeight={"calc(100vh-10rem)"} flexDirection={"column"}>
      <HeaderComponent />
      <Outlet />
    </Flex>
  )
}