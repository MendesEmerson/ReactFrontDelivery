import { Flex, Link, Text } from "@chakra-ui/layout";

const FooterComponent = () => {
  return (
    <Flex padding={"20px"} alignItems={"center"} bg={"blue.700"} as="footer">
      <Text>
        © {new Date().getFullYear()} DeliveryExpress. Todos os direitos reservados.{' '}
        <Link href="#">Política de Privacidade</Link> |{' '}
        <Link href="#">Termos de Uso</Link>
      </Text>
    </Flex>
  );
};

export default FooterComponent;