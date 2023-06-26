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
  useToast,
} from "@chakra-ui/react";
import { MdLock, MdLogin, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { InputComponent } from "../../components/input";
import { ButtonComponent } from "../../components/button";
import { FormEvent, useState } from "react";
import { useAuth } from "../../context/authContext";
import axiosConfig from "../../axiosConfig";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";

export function LoginPage() {
  const { login } = useAuth();
  const toast = useToast()
  const navigate = useNavigate();
  const [selectorAccount, setSelectorAccount] = useState<string>("Entregador");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const handleOnClickNavigateClient = () => {
    navigate("/");
  };

  const handleOnClickNavigateEntregador = () => {
    navigate("/entregador");
  };

  const handleOnClickNavigateRestaurante = (restaurant_id: string): void => {
    navigate(`/restaurante/${restaurant_id}`);
  };


  async function handleFormLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const userCreate = {
      username,
      password,
    };

    try {
      if (selectorAccount === "Cliente") {
        const response = await axiosConfig.post(
          "/login/client",
          userCreate
        );

        if (response.status === 200) {
          const authToken = response.data.token;
          const accountType = response.data.client.accountType
          const usernameAccount = response.data.client.username
          login(authToken, accountType, usernameAccount);
          handleOnClickNavigateClient();
        }
      }

      if (selectorAccount === "Entregador") {
        const response = await axiosConfig.post(
          "/login/deliveryman",
          userCreate
        );

        if (response.status === 200) {
          const authToken = response.data.token;
          const accountType = response.data.deliveryman.accountType
          const usernameAccount = response.data.deliveryman.username
          login(authToken, accountType, usernameAccount);
          handleOnClickNavigateEntregador();
        }
      }

      if (selectorAccount === "Restaurante") {
        const response = await axiosConfig.post(
          "/login/restaurant",
          userCreate
        );

        if (response.status === 200) {
          const authToken = response.data.token;
          const accountType = response.data.restaurant.accountType
          const restaurant_id = response.data.restaurant.id
          const usernameAccount = response.data.restaurant.name
          login(authToken, accountType, usernameAccount);
          handleOnClickNavigateRestaurante(restaurant_id);
        }
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const { response } = error;

        if (response && response.status === 400) {
          toast({
            title: "Acesso negado!",
            description: "Usuário ou Senha Inválido!",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      } else {
        console.log(error);
      }
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
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        bg="whiteAlpha.400"
        p="4"
        width={"auto"}
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
              <Flex alignItems={"center"}>
                <FormLabel mt="2">Lembrar minha conta?</FormLabel>
                <Switch id="choice" />
              </Flex>

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
                  <Radio
                    value="Restaurante"
                    onChange={() => setSelectorAccount("Restaurante")}
                  >
                    Restaurante
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
