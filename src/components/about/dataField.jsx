import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const DataField = ({ fieldName, value }) => {
    return (
        <Flex
            direction={{ base: "column", sm: "row", lg: "column", xl: "row" }}
            gap={{ base: 0, sm: 2, lg: 0, xl: 2 }}
        >
            <Text opacity="0.8" textTransform="capitalize">{`${fieldName}:`}</Text>
            <Text fontWeight="semibold" textTransform="">{value}</Text>
        </Flex>
    );
};

export default DataField;
