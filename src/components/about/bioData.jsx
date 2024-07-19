import React from "react";
import { Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import { IoMdDownload } from "react-icons/io";
import DataField from "./dataField";
import CtaButton from "../ctaButton";
import { bioData } from "../../data";
import badruImage from '../../assets/badru-blackbg2.png';

const BioData = () => {
    return (
        <Flex direction="column" gap={6}>
            <Heading as="h3" fontSize={{base: "xl", md: "2xl"}} textAlign={{base: "center", md: "left"}}>
                PERSONAL INFO
            </Heading>

            <Image
                borderRadius="full"
                boxSize="200px"
                p="2px"
                src={badruImage}
                alt="Badrudeen Abdul-hameed"
                hideFrom="md"
                border="4px"
                borderColor="#2f2f2f"
                alignSelf="center"
            />

            <Grid templateColumns="repeat(2, 1fr)" rowGap={{base: 4, md: 6}} columnGap={{base: 6, md: 10}}>
                {bioData.map((data, index) => (
                    <GridItem key={index}>
                        <DataField
                            fieldName={data.fieldName}
                            value={data.value}
                        />
                    </GridItem>
                ))}
                {/* <GridItem>
                    <DataField fieldName="email" value="adex.badr18@gmail.com" />
                </GridItem> */}
            </Grid>

            <DataField fieldName="email" value="adex.badr18@gmail.com" />

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
