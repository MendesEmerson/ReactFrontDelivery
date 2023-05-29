import { Flex, FormControl, FormLabel, Icon, Input, Text, Wrap, border } from "@chakra-ui/react";
import { MdPersonAdd } from "react-icons/md";
import { InputComponent } from "../../components/input";
import { ButtonComponent } from "../../components/button";


export function CadastroPage() {

    function handleFormLogin() {
        return
    }

    return (
        <Flex
            height={"100vh"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                bg="whiteAlpha.400" p="4"
                width={"30%"}
                height={"78%"}
                opacity={"1"}
                borderRadius={"20px"}
            >
                <FormControl onSubmit={handleFormLogin}>
                    <Flex justifyContent={"center"} alignItems={"center"}>
                        <Icon as={MdPersonAdd} marginRight={2} fontSize={"30px"} />
                        <Text textAlign={"center"} fontWeight={"bold"} fontSize={"30px"}>Cadastro</Text>
                    </Flex>
                    <FormLabel htmlFor="my-input" marginTop={"24px"}>Usuário:</FormLabel>
                    <InputComponent border={"2px"} borderRadius={"12px"} placeholder="Digite seu usuário" _hover={{ opacity: 0.8, border: "1px" }} />

                    <FormLabel htmlFor="my-input" marginTop={"24px"}>Senha:</FormLabel>
                    <InputComponent border={"2px"} borderRadius={"12px"} placeholder="Digite sua senha" _hover={{ opacity: 0.8, border: "1px" }}
                    />

                    <FormLabel htmlFor="my-input" marginTop={"24px"}>Confirme sua senha:</FormLabel>
                    <InputComponent border={"2px"} borderRadius={"12px"} placeholder="Digite sua senha" _hover={{ opacity: 0.8, border: "1px" }}
                    />
                    <Wrap marginTop={"48px"}>
                        <ButtonComponent icon={MdPersonAdd} label={"Cadastrar"} />
                    </Wrap>
                </FormControl>
            </Flex>
        </Flex>
    )
}