import React, { useState } from "react";
import {
    Box,
    Text,
    Heading,
    Flex,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from "@chakra-ui/react";

const ProjectCard = ({ imgSrc, title }) => {
    const [isHover, setIsHover] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const showTitle = () => {
        setIsHover(true);
    };

    const showImage = () => {
        setIsHover(false);
    };

    return (
        <>
            <Box
                borderRadius="md"
                h="auto"
                cursor="pointer"
                onClick={onOpen}
                onMouseEnter={showTitle}
                onMouseLeave={showImage}
            >
                {isHover ? (
                    <Flex
                        w="full"
                        h="full"
                        justifyContent="center"
                        alignItems="center"
                        bg="#FFB400"
                        borderRadius="md"
                    >
                        <Heading
                            as="h4"
                            fontSize="lg"
                            fontWeight="semibold"
                            textColor="white"
                            textTransform="uppercase"
                        >
                            {title}
                        </Heading>
                    </Flex>
                ) : (
                    <Image
                        src={imgSrc}
                        objectFit="cover"
                        alt={title}
                        borderRadius="md"
                    />
                )}
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Project Body Here</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProjectCard;
