import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" align="center" my={3} variant="big-title">404 ERROR!</Heading>
      <Text align="center" my={3}>This page doesn&apos;t exist.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Back to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
