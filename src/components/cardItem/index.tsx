import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Card, CardBody, Image } from "@chakra-ui/react";

interface IItemCardProps {
    itemName: string;
    clientName?: string;
    dataPedido: string;
    dataFinalização?: string;
    image: string
}

export function ItemCardComponent({
    clientName,
    dataPedido,
    itemName,
    dataFinalização,
    image
}: IItemCardProps) {
    return (
        <Flex flexDirection="column" justifyContent="center" margin="25px" width={"90%"} alignItems={"center"}>
            <Card
                padding={"15px"}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"auto"}
                width={"85%"}
                maxWidth={"425px"}
                bg={"whiteAlpha.300"}
                borderRadius={"24px"}
                _hover={{ transform: "scale(1.05)", transition: "transform 0.25s" }}
            >
                <Flex alignItems={'Center'}>
                    <Image objectFit={"cover"} borderRadius={"12px"} boxSize={"90px"} src={image} />


                    <Stack>
                        <CardBody>
                            <Heading size="md">{itemName}</Heading>

                            {clientName && clientName?.length > 0 ? (<Text >Cliente: {clientName}</Text>): null}
                            <Text >Data do pedido: {dataPedido}</Text>
                            {dataFinalização && (
                                <Text>{dataFinalização}</Text>
                            )}
                        </CardBody>
                    </Stack>
                </Flex>

            </Card>
        </Flex>
    );
}
