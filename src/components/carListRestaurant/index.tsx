import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ICardListRestaurant } from "../../interfaces/components/cardListRestaurantComponent";
import { ButtonComponent } from "../button";
import { MdRestaurant } from "react-icons/md";

export function CardListRestaurant({ onClick, image, imageDescription, restaurantName, restaurantDescription }: ICardListRestaurant) {
    return (
        <Card
            direction={"row"}
            overflow='hidden'
            variant='outline'
            height="30vh"
            maxW="500px"
            width="75%"
            padding="5px"
            margin="15px"
            borderRadius="12px"
            alignItems="center"

        >
            <Image
                borderRadius="12px"
                objectFit='cover'
                height="65%"
                src={image}
                alt={imageDescription}
            />

            <Stack >
                <CardBody>
                    <Heading size='md'>{restaurantName}</Heading>

                    <Text py='2'>
                        {restaurantDescription}
                    </Text>
                </CardBody>
                <CardFooter>
                    <ButtonComponent icon={MdRestaurant} label="Ver mais..." onClick={onClick} />
                </CardFooter>
            </Stack>
        </Card>
    )
}