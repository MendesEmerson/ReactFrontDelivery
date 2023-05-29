import { Box  , Flex, FormControl, FormLabel, Icon, Text, Wrap } from "@chakra-ui/react";
import { MdPersonAdd } from "react-icons/md";
import { InputComponent } from "../input";
import { ButtonComponent } from "../button";

export function RegisterComponent(){

   function handleFormLogin(){
  }

  return(
    <Box borderRadius={"12px"} bg="blackAlpha.100" p="4" width={"30%"} height={"30%"} opacity={"1"}>
      <FormControl onSubmit={handleFormLogin}>
      <Flex justifyContent={"center"}>
        <Icon as={MdPersonAdd} marginRight={2} fontSize={"30px"}/>
        <Text textAlign={"center"} fontWeight={"bold"} fontSize={"30px"}>Cadastro</Text>
      </Flex>
      <FormLabel htmlFor="my-input"  marginTop={"24px"}>Usuário:</FormLabel>
      <InputComponent border={"2px"} borderRadius={"12px"} placeholder="Digite seu usuário" _hover={{opacity:0.8, border:"1px"}}/>

      <FormLabel htmlFor="my-input" marginTop={"24px"}>Senha:</FormLabel>
      <InputComponent border={"2px"} borderRadius={"12px"} placeholder="Digite sua senha"_hover={{ opacity: 0.8, border:"1px" }}
      />

      <FormLabel htmlFor="my-input" marginTop={"24px"}>Confirme sua senha:</FormLabel>
      <InputComponent border={"2px"} borderRadius={"12px"} placeholder="Digite sua senha"_hover={{ opacity: 0.8, border:"1px" }}
      />
            <Wrap marginTop={"48px"}>
        <ButtonComponent icon={MdPersonAdd} label={"Login"}/>
      </Wrap>
      </FormControl>
    </Box>
  )
}