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
import { useAuth } from "../../context/authContext";
import axiosConfig from "../../axiosConfig";
import { useNavigate } from "react-router";

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [selectorAccount, setSelectorAccount] = useState<string>("Entregador");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const handleOnClickNavigateClient = () => {
    navigate("/cliente");
  };

  const handleOnClickNavigateEntregador = () => {
    navigate("/entregador");
  };

  async function handleFormLogin(e: any) {
    e.preventDefault();

    const userCreate = {
      username,
      password,
    };

    try {
      if (selectorAccount === "Cliente") {
        const response = await axiosConfig.post("/login/client", userCreate);

        if (response.status === 200) {
          const authToken = response.data;
          login(authToken);
          handleOnClickNavigateClient();
        }
      }

      if (selectorAccount === "Entregador") {
        const response = await axiosConfig.post(
          "/login/deliveryman",
          userCreate
        );

        if (response.status === 200) {
          const authToken = response.data;
          login(authToken);
          handleOnClickNavigateEntregador();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex
      minH={"90vh"}
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
        <Box>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Icon as={MdLogin} marginRight={2} fontSize={"30px"} />
            <Text textAlign={"center"} fontWeight={"bold"} fontSize={"30px"}>
              Login
            </Text>
          </Flex>
          <form onSubmit={handleFormLogin}>
            <FormControl height={"100%"}>
              <FormLabel marginTop={"24px"}>Usuário:</FormLabel>
              <InputComponent
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                border={"2px"}
                borderRadius={"12px"}
                placeholder="Digite seu usuário"
                _hover={{ opacity: 0.8, border: "1px" }}
              />

              <FormLabel marginTop={"24px"}>Senha:</FormLabel>
              <InputGroup>
                <InputComponent
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <FormLabel mt="2">Lembrar minha conta?</FormLabel>
              <Switch id="choice" />
              <RadioGroup value={selectorAccount} padding={"4px"}>
                <Stack direction="row">
                  <Radio
                    value="Entregador"
                    onChange={() => setSelectorAccount("Entregador")}
                  >
                    Entregador
                  </Radio>
                  <Radio
                    value="Cliente"
                    onChange={() => setSelectorAccount("Cliente")}
                  >
                    Cliente
                  </Radio>
                </Stack>
              </RadioGroup>
              <Wrap marginTop={"28px"}>
                <ButtonComponent icon={MdLock} label={"Login"} type="submit" />
              </Wrap>
            </FormControl>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
}
