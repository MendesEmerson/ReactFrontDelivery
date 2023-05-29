import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { MdPersonAdd, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { InputComponent } from "../../components/input";
import { ButtonComponent } from "../../components/button";
import { useState } from "react";

export function CadastroPage() {
  function handleFormLogin() {
    return;
  }
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [value, setValue] = useState("1");

  return (
    <Flex
      height={"100vh"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"10px"}
      margin={"10px"}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        bg="whiteAlpha.400"
        p="4"
        width={"30%"}
        height={"auto"}
        opacity={"1"}
        borderRadius={"20px"}
      >
        <Box overflowY="scroll">
          <FormControl onSubmit={handleFormLogin}>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Icon as={MdPersonAdd} marginRight={2} fontSize={"30px"} />
              <Text textAlign={"center"} fontWeight={"bold"} fontSize={"30px"}>
                Cadastro
              </Text>
            </Flex>
            <FormLabel htmlFor="my-input" marginTop={"24px"}>
              Nome:
            </FormLabel>
            <InputComponent
              border={"2px"}
              borderRadius={"12px"}
              placeholder="Digite seu nome"
              _hover={{ opacity: 0.8, border: "1px" }}
            />
            <FormLabel htmlFor="my-input" marginTop={"24px"}>
              Usuário:
            </FormLabel>
            <InputComponent
              border={"2px"}
              borderRadius={"12px"}
              placeholder="Digite seu usuário"
              _hover={{ opacity: 0.8, border: "1px" }}
            />

            <FormLabel htmlFor="my-input" marginTop={"24px"}>
              Senha:
            </FormLabel>
            <InputGroup>
              <InputComponent
                type={showPassword ? "text" : "password"}
                border={"2px"}
                borderRadius={"12px"}
                placeholder="Digite sua senha"
                _hover={{ opacity: 0.8, border: "1px" }}
              />
              <InputRightElement>
                {showPassword ? (
                  <MdVisibilityOff onClick={handleTogglePassword} />
                ) : (
                  <MdVisibility onClick={handleTogglePassword} />
                )}
              </InputRightElement>
            </InputGroup>

            <FormLabel htmlFor="my-input" marginTop={"24px"}>
              Confirme sua senha:
            </FormLabel>
            <InputComponent
              type={showPassword ? "text" : "password"}
              border={"2px"}
              borderRadius={"12px"}
              placeholder="Digite sua senha"
              _hover={{ opacity: 0.8, border: "1px" }}
            />

            <RadioGroup onChange={setValue} value={value} padding={"4px"}>
              <Stack direction="row">
                <Radio value="1">Entregador</Radio>
                <Radio value="2">Cliente</Radio>
              </Stack>
            </RadioGroup>
            <Wrap marginTop={"28px"}>
              <ButtonComponent icon={MdPersonAdd} label={"Cadastrar"} />
            </Wrap>
          </FormControl>
        </Box>
      </Flex>
    </Flex>
  );
}
