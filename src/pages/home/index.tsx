import { Flex } from "@chakra-ui/react";
import { CardComponent } from "../../components/card";

export function ContactPage() {
  return (
    <Flex
      justifyContent={"space-around"}
      alignItems={"center"}
      minH={"90vh"}

    >
      <CardComponent
        description="Desenvolvedor Fullstack | Node | React | Java."
        anotherDescription='"Tente mover o mundo, o primeiro passo será mover a si mesmo".'
        githubLink="https://github.com/mendesemerson"
        linkedinLink="https://linkedin.com/in/mendesemerson/"
        src="https://avatars.githubusercontent.com/u/97401294?v=4"
        whatsappLink="https://wa.me/5521968410059"
        name="Emerson Mendes"
      />
      <CardComponent
        description="Desenvolvedor Fullstack | Node | React | Java."
        anotherDescription='"Aproveite todas as oportunidades; onde não há, faça-o você mesmo".'
        githubLink="https://github.com/juancassiano"
        linkedinLink="https://linkedin.com/in/juan-cassiano/"
        src="https://avatars.githubusercontent.com/u/59894338?v=4"
        whatsappLink="https://wa.me/5521983015177"
        name="Juan Cassiano"
      />
    </Flex>
  );
}
