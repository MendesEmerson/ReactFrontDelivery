import { Box, Flex, Text } from "@chakra-ui/react";
import { AvatarComponent } from "../avatar";

export function FooterComponent(){
  return(
      <Box bg="blue.700" p="4">
        <Text textAlign="center" color={"white"} fontWeight={"bold"}>Desenvolvido por </Text>
        <div>
          <Flex justifyContent={"space-around"}>
           <AvatarComponent github_link="https://github.com/juancassiano" whatsapp_link="https://wa.me/5521972198197" linkedin_link="https://linkedin.com/in/juan-cassiano/" src='https://avatars.githubusercontent.com/u/59894338?v=4' name={"Juan Cassiano"}/>
          <AvatarComponent github_link="https://github.com/mendesemerson" whatsapp_link="https://wa.me/5521968410059" linkedin_link="https://linkedin.com/in/mendes-emerson/"src='https://avatars.githubusercontent.com/u/97401294?v=4' name={"Emerson Mendes"} />
          </Flex>
        </div>
      </Box>
  );
}