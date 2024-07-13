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
    Link,
} from "@chakra-ui/react";
import { TbExternalLink } from "react-icons/tb";

const ProjectCard = ({ project }) => {
    const [isHover, setIsHover] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { title, desc, previewLink, image, username, password } = project;

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
                            textAlign="center"
                        >
                            {project.title}
                        </Heading>
                    </Flex>
                ) : (
                    <Image
                        src={image}
                        objectFit="cover"
                        alt={title}
                        borderRadius="md"
                    />
                )}
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside" isCentered>
                <ModalOverlay />
                <ModalContent bg="#252525">
                    <ModalHeader color="#FFB400" fontWeight="bold">
                        {title}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction="column" gap={4}>
                            <Text>{desc}</Text>
                            {username && password && (
                                <Flex gap={6} alignItems="center" fontWeight="semibold" opacity="0.7">
                                    <Text>Username: {username}</Text>
                                    <Text>Password: {password}</Text>
                                </Flex>
                            )}
                            <Image src={image} />
                        </Flex>
                    </ModalBody>

                    <ModalFooter justifyContent="center">
                        <Link
                            href={previewLink}
                            display="flex"
                            gap={3}
                            justifyContent="center"
                            alignItems="center"
                            bg="#FFB400"
                            _hover={{ bg: "yellow.500" }}
                            borderRadius="md"
                            color="white"
                            fontWeight="semibold"
                            p={3}
                            isExternal
                        >
                            <TbExternalLink /> Preview
                        </Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProjectCard;
