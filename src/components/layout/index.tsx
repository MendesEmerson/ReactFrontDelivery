import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../header/indes";
import FooterComponent from "../footer";

export function LayoutComponent() {
  return (
    <Flex
      flexDirection={"column"}
      maxWidth={"100%"}
      minHeight={"calc(100vh - 10rem)"}
    
    >
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </Flex>
  );
}
