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

interface IAvatarProps {
  name: string;
  linkedin_link: string;
  github_link: string;
  whatsapp_link: string;
  src: string;
  description: string;
}

export function AvatarComponent(props: IAvatarProps) {
  return (
    <div>
      <WrapItem display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Avatar
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          size="3xl"
          name={props.name}
          src={props.src}
          
        />

        <Stack>
          <CardBody>
            <Heading size="md">{props.name}</Heading>

            <Text py="2">{props.description}.</Text>
          </CardBody>
          <Flex flexDirection={"row"} justifyContent={"justify-around"} width={"100%"}>
            <CardFooter _hover={{transform: "scale(1.3)", transition:"transform 0.2s"}}>
              <Link href={props.github_link}>
                <AiFillGithub color={"black"} size={"28px"} />
              </Link>
            </CardFooter>
            <CardFooter _hover={{transform: "scale(1.3)", transition:"transform 0.2s"}}>
              <Link href={props.linkedin_link}>
                <AiFillLinkedin color={"black"} size={"28px"}/>
              </Link>
            </CardFooter>

            <CardFooter _hover={{transform: "scale(1.3)", transition:"transform 0.2s"}}>
              <Link href={props.whatsapp_link}>
                <AiOutlineWhatsApp color={"black"} size={"28px"}/>
              </Link>
            </CardFooter>
          </Flex>
        </Stack>
      </WrapItem>
    </div>
  );
}
