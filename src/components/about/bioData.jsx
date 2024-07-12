import React from "react";
import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { IoMdDownload } from "react-icons/io";
import DataField from "./dataField";
import CtaButton from "../ctaButton";
import { bioData } from "../../data";

const BioData = () => {
    return (
        <Flex direction="column" gap={6}>
            <Heading as="h3" fontSize="2xl">PERSONAL INFO</Heading>

            <Grid templateColumns="repeat(2, 1fr)" rowGap={6} columnGap={10}>
                {bioData.map((data, index) => (
                    <GridItem key={index}>
                        <DataField
                            fieldName={data.fieldName}
                            value={data.value}
                        />
                    </GridItem>
                ))}
            </Grid>

            <CtaButton icon={IoMdDownload} to="/about" mt={4}>
                Download CV
            </CtaButton>
        </Flex>
    );
};

export default BioData;
