import React from "react";
import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { IoMdDownload } from "react-icons/io";
import DataField from "./dataField";
import CtaButton from "../ctaButton";
import { bioData } from "../../data";

const BioData = () => {
    return (
        <Flex direction="column" gap={6}>
            <Heading as="h3" fontSize="2xl">
                PERSONAL INFO
            </Heading>

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

            <CtaButton
                icon={IoMdDownload}
                to="https://drive.google.com/file/d/14bv2LJ2o4gTlhIZqqai246PoZPfXFmoo/view?usp=sharing"
                mt={4}
                target="_blank"
            >
                Download CV
            </CtaButton>
        </Flex>
    );
};

export default BioData;
