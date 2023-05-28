import { Avatar, WrapItem, Text, Flex, Link } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin,AiOutlineWhatsApp } from "react-icons/ai";


export function AvatarComponent(props){
  return(
    <div>
      
    <WrapItem>
        <Avatar size='2xl' name={props.name} src={props.src} />
      <Flex flexDirection={"column"}>
      <Text textAlign={"center"} color={"white"} fontWeight={"bold"}>{props.name}</Text>
        <Flex flexDirection={"row"} justifyContent={"space-evenly"}>
          <Link href={props.github_link} >
          <AiFillGithub color={"white"}/>
          </Link>

          <Link href={props.linkedin_link} >
           <AiFillLinkedin color={"white"}/>
          </Link>

          <Link href={props.whatsapp_link} >
          <AiOutlineWhatsApp color={"white"}/>
          </Link>

        </Flex>
      </Flex>
    </WrapItem>
</div>
  )
}
