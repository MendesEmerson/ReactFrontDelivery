import { Center, Flex, Heading, Stack, Text, Wrap } from "@chakra-ui/layout";
import { Card, CardBody, Image, ImageProps } from "@chakra-ui/react";

interface IItemCardProps {
    itemName: string;
    clientName: string;
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
        <Flex flexDirection="column" justifyContent="center" margin="25px" width={"90%"}>
            <Card
                padding={"10px"}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"110px"}
                width={"75%"}
                bg={"blue.400"}
                borderRadius={"24px"}
                _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}
            >
                <Flex alignItems={'Center'}>
                    <Image borderRadius={"12px"} boxSize={"85px"} src={image} />


                    <Stack>
                        <CardBody>
                            <Heading size="md">{itemName}</Heading>

                            <Text >Cliente: {clientName}</Text>
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
