import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../header/indes";
import FooterComponent from "../footer";

export function LayoutComponent() {
  return (
    <Flex
      flexDirection={"column"}
      height={"100vh"}
      width={"100%"}
      justifyContent={"space-between"}
      
      // minHeight={"calc(100vh - 10rem)"}

    >
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </Flex>
  );
}
