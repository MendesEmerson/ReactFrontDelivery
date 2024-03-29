import {
  Avatar,
  WrapItem,
  Text,
  Flex,
  Link,
  Heading,
  CardBody,
  Stack,
  CardFooter,
} from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { IAvatarProps } from "../../interfaces/components/avatarComponent";


export function AvatarComponent({
  description,
  githubLink,
  linkedinLink,
  name,
  src,
  whatsappLink,
  anotherDescription,
}: IAvatarProps) {
  return (
    <div>
      <WrapItem
      
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Avatar
          objectFit="cover"
          maxW={{ base: "50%", sm: "200px" }}
          size="3xl"
          name={name}
          src={src}
        />

        <Stack>
          <CardBody>
            <Heading size="md">{name}</Heading>

            <Text py="2">{description}</Text>
            <Text >{anotherDescription}</Text>
          </CardBody>
          <Flex
            flexDirection={"row"}
            justifyContent={"justify-around"}
            width={"100%"}
          >
            <CardFooter
              _hover={{ transform: "scale(1.3)", transition: "transform 0.2s" }}
            >
              <Link href={githubLink} isExternal>
                <AiFillGithub color={"black"} size={"28px"} />
              </Link>
            </CardFooter>
            <CardFooter
              _hover={{ transform: "scale(1.3)", transition: "transform 0.2s" }}
            >
              <Link href={linkedinLink} isExternal>
                <AiFillLinkedin color={"black"} size={"28px"} />
              </Link>
            </CardFooter>

            <CardFooter
              _hover={{ transform: "scale(1.3)", transition: "transform 0.2s" }}
            >
              <Link href={whatsappLink} isExternal>
                <AiOutlineWhatsApp color={"black"} size={"28px"} />
              </Link>
            </CardFooter>
          </Flex>
        </Stack>
      </WrapItem>
    </div>
  );
}
