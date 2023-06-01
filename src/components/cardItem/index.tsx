import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Card, CardBody, Image } from "@chakra-ui/react";

interface IItemCardProps {
    itemName: string;
    username?: string;
    dataPedido: string;
    dataFinalização?: string;
    image: string
    typeCard: "Entregador" | "Cliente"
}

export function ItemCardComponent({
    username,
    dataPedido,
    itemName,
    dataFinalização,
    image,
    typeCard
}: IItemCardProps) {
    return (
        <Flex flexDirection="column" justifyContent="center" margin="15px" width={"90%"} alignItems={"center"}>
            <Card
                padding={"10px"}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"auto"}
                width={"80%"}
                maxWidth={"425px"}
                bg={"whiteAlpha.300"}
                borderRadius={"24px"}
                _hover={{ transform: "scale(1.05)", transition: "transform 0.25s" }}
                textAlign={"start"}
            >
                <Flex alignItems={'Center'}>
                    <Image objectFit={"cover"} borderRadius={"12px"} boxSize={"90px"} src={image} />


                    <Stack>
                        <CardBody display="flex" flexDirection="column" gap="8px">
                            <Heading textAlign="center" size="md">{itemName}</Heading>

                            {username && username.length > 0 && (
                                <Text>{typeCard}: {username}</Text>
                            )}

                            <Text>Pedido Realizado: {dataPedido}</Text>

                            {dataFinalização && (
                                <Text>Pedido Finalizado: {dataFinalização}</Text>
                            )}
                        </CardBody>

                    </Stack>
                </Flex>

            </Card>
        </Flex>
    );
}
