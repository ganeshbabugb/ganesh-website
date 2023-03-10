import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" align="center" my={3} variant="big-title">
        404 ERROR!
      </Heading>
      <Text align="center" my={3}>
        This page doesn&apos;t exist.
      </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Back to home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
