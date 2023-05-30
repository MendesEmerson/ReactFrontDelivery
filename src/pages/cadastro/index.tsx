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
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import axiosConfig from "../../axiosConfig";

export function CadastroPage() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [selectorAccount, setSelectorAccount] = useState<string>("Entregador");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleOnClickNavigateLogin = () => {
    navigate("/login");
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  async function handleCreateUser(e: any) {
    e.preventDefault();
    const userCreate = {
      username,
      password,
      name,
    };

    try {
      if (selectorAccount === "Cliente") {
        const response = await axiosConfig.post("/client", userCreate);
        if (response.status === 201) {
          const authToken = response.data;
          login(authToken);
          handleOnClickNavigateLogin();
        }
      }
      if (selectorAccount === "Entregador") {
        const response = await axiosConfig.post("/deliveryman", userCreate);
        if (response.status === 201) {
          const authToken = response.data;
          login(authToken);
          handleOnClickNavigateLogin();
        }
      }
      if (password != checkPassword) {
        alert("Senha Diferente");
      }
    } catch (error) {
      console.log(error);
    }
  }

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
        <Box>
          <form onSubmit={handleCreateUser}>
            <FormControl>
              <Flex justifyContent={"center"} alignItems={"center"}>
                <Icon as={MdPersonAdd} marginRight={2} fontSize={"30px"} />
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={"30px"}
                >
                  Cadastro
                </Text>
              </Flex>
              <FormLabel marginTop={"24px"}>Nome:</FormLabel>
              <InputComponent
                value={name}
                onChange={(e) => setName(e.target.value)}
                border={"2px"}
                borderRadius={"12px"}
                placeholder="Digite seu nome"
                _hover={{ opacity: 0.8, border: "1px" }}
              />
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

              <FormLabel marginTop={"24px"}>Confirme sua senha:</FormLabel>
              <InputComponent
                value={checkPassword}
                onChange={(e) => setCheckPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                border={"2px"}
                borderRadius={"12px"}
                placeholder="Digite sua senha"
                _hover={{ opacity: 0.8, border: "1px" }}
              />

              <RadioGroup value={selectorAccount} padding={"4px"}>
                <Stack direction="row">
                  <Radio
                    value={"Entregador"}
                    onChange={() => setSelectorAccount("Entregador")}
                  >
                    Entregador
                  </Radio>
                  <Radio
                    value={"Cliente"}
                    onChange={() => setSelectorAccount("Cliente")}
                  >
                    Cliente
                  </Radio>
                </Stack>
              </RadioGroup>
              <Wrap marginTop={"28px"}>
                <ButtonComponent
                  type="submit"
                  icon={MdPersonAdd}
                  label={"Cadastrar"}
                />
              </Wrap>
            </FormControl>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
}
