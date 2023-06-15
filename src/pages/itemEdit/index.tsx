import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import axiosConfig from "../../axiosConfig";
import { useParams } from "react-router-dom";

export function ItemEditPage() {

    const { item_id } = useParams()

 

    return (
        <Flex
            flexDirection={"column"}
            minH={"90vh"}
            width={"100%"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            padding={"10px"}
            margin={"10px"}

        >


        </Flex>
    )
}