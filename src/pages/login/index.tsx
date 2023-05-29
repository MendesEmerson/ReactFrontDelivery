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
  Switch,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { MdLock, MdLogin, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { InputComponent } from "../../components/input";
import { ButtonComponent } from "../../components/button";
import { useState } from "react";

export function LoginPage() {
  function handleFormLogin() {
    return;
  }

  const [value, setValue] = useState("1");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
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
          <FormControl onSubmit={handleFormLogin} height={"100%"}>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Icon as={MdLogin} marginRight={2} fontSize={"30px"} />
              <Text textAlign={"center"} fontWeight={"bold"} fontSize={"30px"}>
                Login
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
            <FormLabel htmlFor="save-me" mt="2">
              Lembrar minha conta?
            </FormLabel>
            <Switch id="choice" />
            <RadioGroup onChange={setValue} value={value} padding={"4px"}>
              <Stack direction="row">
                <Radio value="1">Entregador</Radio>
                <Radio value="2">Cliente</Radio>
              </Stack>
            </RadioGroup>
            <Wrap marginTop={"28px"}>
              <ButtonComponent icon={MdLock} label={"Login"} />
            </Wrap>
          </FormControl>
        </Box>
      </Flex>
    </Flex>
  );
}
