import React, { useState, useRef } from "react";
import {
    Box,
    Flex,
    Text,
    Button,
    Heading,
    Input,
    Textarea,
    SimpleGrid,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Icon,
    IconButton,
} from "@chakra-ui/react";
import PageTitle from "../components/pageTitle";
import MobileNavDrawer from "../components/mobileNavDrawer";
import { contactData, socialLinks } from "../data";
import ContactInfo from "../components/contact/contactInfo";
import SocialIcon from "../components/contact/socialIcon";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose } = useDisclosure();
    const btnRef = useRef();
    const [response, setResponse] = useState("");
    const [mailData, setMailData] = useState({
        senderName: "",
        senderEmail: "",
        subject: "",
        body: "",
    });
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        const elementValue = type === "checkbox" ? checked : value;

        setMailData((prev) => ({
            ...prev,
            [name]: elementValue,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
            (response) => {
                if (response.status === 200) {
                    console.log("SUCCESS!", response.status, response.text);
                    setResponse("ok");
                    setMailData({
                        senderName: "",
                        senderEmail: "",
                        subject: "",
                        body: "",
                    });
                    onOpen();
                    form.current.reset();
                }
            },
            (error) => {
                console.log("FAILED...", error);
                setResponse("error");
                onOpen();
            }
        );
    };

    return (
        <Box w={{base: "100vw", lg: "92vw"}} minH="100vh" pb={16}>
            <PageTitle
                bgText="Contact"
                primaryTitle="Get in"
                coloredTitle="Touch"
            />

            <IconButton
                hideFrom="lg"
                hideBelow="md"
                position={{ base: "absolute", lg: "relative" }}
                top={6}
                right={6}
                icon={<FaBars />}
                ref={btnRef}
                onClick={onMenuOpen}
                size="lg"
                bg="#252525"
                color="whitesmoke"
                fontSize="3xl"
                zIndex="dropdown"
            />

            <Flex direction={{ base: "column", md: "row" }} px={16} gap={10}>
                <Flex direction="column" w={{ md: "96" }} gap={6}>
                    <Heading as="h3" fontSize="2xl">
                        REACH OUT!
                    </Heading>
                    <Text>
                        Feel free to reach out to me. I am always open to
                        discussing new projects, creative ideas or opportunities
                        to be part of your visions.
                    </Text>

                    {contactData.map((contact) => (
                        <ContactInfo key={contact.id} contactObj={contact} />
                    ))}

                    <Flex gap={4}>
                        {socialLinks.map((link) => (
                            <SocialIcon
                                key={link.id}
                                icon={link.icon}
                                linkTo={link.ref}
                            />
                        ))}
                    </Flex>
                </Flex>

                <Box flex="1">
                    <form ref={form} onSubmit={sendEmail}>
                        <Flex direction="column" gap={8}>
                            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                                <Input
                                    name="senderName"
                                    variant="filled"
                                    bg="#252525"
                                    placeholder="Your Name"
                                    borderRadius="full"
                                    size="md"
                                    _placeholder={{
                                        textTransform: "uppercase",
                                    }}
                                    value={mailData.senderName}
                                    onChange={handleFormChange}
                                />
                                <Input
                                    name="senderEmail"
                                    variant="filled"
                                    bg="#252525"
                                    placeholder="Your Email"
                                    borderRadius="full"
                                    size="md"
                                    _placeholder={{
                                        textTransform: "uppercase",
                                    }}
                                    value={mailData.senderEmail}
                                    onChange={handleFormChange}
                                />
                                <Input
                                    name="subject"
                                    variant="filled"
                                    bg="#252525"
                                    placeholder="Subject"
                                    borderRadius="full"
                                    size="md"
                                    _placeholder={{
                                        textTransform: "uppercase",
                                    }}
                                    value={mailData.subject}
                                    onChange={handleFormChange}
                                />
                            </SimpleGrid>

                            <Textarea
                                name="body"
                                borderRadius="3xl"
                                border={0}
                                size="md"
                                bg="#252525"
                                resize="vertical"
                                rows={6}
                                placeholder="Your Message"
                                _placeholder={{ textTransform: "uppercase" }}
                                value={mailData.body}
                                onChange={handleFormChange}
                            ></Textarea>

                            <Button
                                type="submit"
                                borderRadius="full"
                                bg="#FFB400"
                                color="#111"
                                _hover={{ bg: "yellow.400" }}
                            >
                                Send Message
                            </Button>
                        </Flex>
                    </form>
                </Box>
            </Flex>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="xl"
                scrollBehavior="inside"
                isCentered
            >
                <ModalOverlay />
                <ModalContent bg="#252525">
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex
                            direction="column"
                            alignItems="center"
                            gap={5}
                            py={5}
                        >
                            <Flex
                                h={20}
                                w={20}
                                justifyContent="center"
                                alignItems="center"
                                p={1}
                                borderRadius="full"
                                shadow="md"
                                bg="whitesmoke"
                            >
                                <Flex
                                    h={16}
                                    w={16}
                                    justifyContent="center"
                                    alignItems="center"
                                    p={1}
                                    borderRadius="full"
                                    shadow="md"
                                    bg="#777"
                                >
                                    <Icon
                                        as={
                                            response === "ok"
                                                ? IoCheckmarkDoneCircle
                                                : MdError
                                        }
                                        color={
                                            response === "ok"
                                                ? "#ffb400"
                                                : "red.500"
                                        }
                                        fontSize="5xl"
                                    />
                                </Flex>
                            </Flex>

                            <Flex direction="column">
                                <Heading
                                    as="h3"
                                    fontSize="lg"
                                    fontWeight="bold"
                                    mb={5}
                                    textAlign="center"
                                    color={
                                        response === "ok"
                                            ? "#ffb400"
                                            : "red.500"
                                    }
                                >
                                    {response === "ok"
                                        ? "Message sent successfully!"
                                        : "Message not sent!"}
                                </Heading>
                                <Text textAlign="center">
                                    {response === "ok"
                                        ? "Thank you for getting in touch, you will"
                                        : "Sorry, something went wrong. Please try again."}
                                </Text>
                                {response === "ok" && (
                                    <Text textAlign="center">
                                        receive a feedback shortly.
                                    </Text>
                                )}
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <MobileNavDrawer
                onClose={onMenuClose}
                isOpen={isMenuOpen}
                btnRef={btnRef}
            />
        </Box>
    );
};

export default Contact;
