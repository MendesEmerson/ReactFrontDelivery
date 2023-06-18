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
      padding={"20px 10px"}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      display={"flex"}
      justifyContent={"center"}
      height={"45%"}
      width={"45%"}
      bg={"whiteAlpha.100"}
      borderRadius={"12px"}
      _hover={{transform: "scale(1.05)", transition:"transform 0.2s"}}
    >
      <div>
        <Flex>
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
      </div>
    </Card>
  );
}
