import { Card, Flex } from "@chakra-ui/react";
import { AvatarComponent } from "../avatar";

interface ICardComponentProps {
  description: string;
  github_link: string;
  whatsapp_link: string;
  linkedin_link: string;
  name: string;
  src: string;
}

export function CardComponent({
  description,
  github_link,
  linkedin_link,
  name,
  src,
  whatsapp_link,
}: ICardComponentProps) {
  return (
    <Card
      padding={"20px 10px"}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      display={"flex"}
      justifyContent={"center"}
      height={"40%"}
      width={"40%"}
      bg={"blue.400"}
      borderRadius={"12px"}
    >
      <div>
        <Flex>
          <AvatarComponent            
            description={description}
            github_link={github_link}
            whatsapp_link={whatsapp_link}
            linkedin_link={linkedin_link}
            src={src}
            name={name}
          />
        </Flex>
      </div>
    </Card>
  );
}
