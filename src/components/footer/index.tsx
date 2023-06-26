import { Flex, Link, Text } from "@chakra-ui/layout";

const FooterComponent = () => {
  return (
      <Flex  justifyContent={"center"} padding={"20px"} alignItems={"center"} bg={"blue.700"}>
        <Text>
          © {new Date().getFullYear()} DeliveryExpress. Todos os direitos reservados.{' '}
          <Link color="white" href="#">Política de Privacidade</Link> |{' '}
          <Link color="white" href="#">Termos de Uso</Link> |{' '}
          <Link color="white" href="/contact">Contatos</Link>
        </Text>
      </Flex>
  );
};

export default FooterComponent;