import { Flex } from "@chakra-ui/react";
import { CardComponent } from "../../components/card";


export function ContactPage(){
  return(
    <Flex justifyContent={"space-around"} alignItems={"center"} height={"100vh"}>
    <CardComponent description='Desenvolvedor Fullstack | Node | React | Java' github_link='https://github.com/mendesemerson' linkedin_link='https://linkedin.com/in/mendes-emerson/' src='https://avatars.githubusercontent.com/u/97401294?v=4' whatsapp_link='https://wa.me/5521968410059' name='Emerson Mendes'/>
    <CardComponent description='Desenvolvedor Fullstack | Node | React | Java' github_link='https://github.com/juancassiano' linkedin_link='https://linkedin.com/in/juan-cassiano/' src='https://avatars.githubusercontent.com/u/59894338?v=4' whatsapp_link='https://wa.me/5521983015177' name='Juan Cassiano'/>
    </Flex>
  )
}