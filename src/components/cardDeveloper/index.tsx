import { Card, Flex } from "@chakra-ui/react";
import { AvatarComponent } from "../avatar";
import { ICardComponentProps } from "../../interfaces/components/cardComponentInterface";

export function CardDeveloperComponent({
  description,
  anotherDescription,
  githubLink: github_link,
  linkedinLink: linkedin_link,
  name,
  src,
  whatsappLink: whatsapp_link,
}: ICardComponentProps) {
  return (
    <Card
      padding={"10px"}
      margin={"20px"}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      display={"flex"}
      justifyContent={"center"}
      height={"40%"}
      width={"90%"}
      bg={"whiteAlpha.100"}
      borderRadius={"12px"}
      _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}
    >

      <Flex
        alignItems={"center"}
        justifyContent={"center"}>
        <AvatarComponent
          description={description}
          anotherDescription={anotherDescription}
          githubLink={github_link}
          whatsappLink={whatsapp_link}
          linkedinLink={linkedin_link}
          src={src}
          name={name}
        />
      </Flex>
    </Card>
  );
}
