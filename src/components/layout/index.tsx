import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../header/indes";

export function LayoutComponent() {
  return (
    <Flex
      flexDirection={"column"}
      height={"100vh"}
      width={"100%"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 10rem)"}

    >
      <HeaderComponent />
      <Outlet />
    </Flex>
  );
}
