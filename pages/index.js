import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  Heading,
  IconButton,
  Link,
  List,
  ListItem,
  useColorModeValue,
  Wrap
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FaJava, FaLinux, FaReact } from 'react-icons/fa'
import { FaGolang } from "react-icons/fa6"
import { IoLogoJavascript } from 'react-icons/io'
import { IoLogoGithub, IoMailOutline } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import Avathar from '../public/assets/images/ganesh.jpg'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a passionate software engineer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ganesh babu
          </Heading>
          <p>(Front-End engineer, Designer, and System Administrator)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src={Avathar}
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          I’m a passionate software developer from India who enjoys turning ideas into impactful digital products. I love the entire journey from planning and writing clean, efficient code to solving real-world problems with thoughtful software solutions.
        </Paragraph>

        <Paragraph>
          My experience spans building robust backend systems and developing high-performance, scalable services. Working on diverse projects has sharpened my technical skills.
        </Paragraph>

        <Paragraph>
          I enjoy connecting with like-minded individuals who are passionate about technology, learning, and creating a positive impact. For me, great software is built not just with code, but with a genuine passion for making something that matters.
        </Paragraph>

        <Center mt={3}>
          <Paragraph>
            Click here to download{' '}
            <Link href="" as={NextLink} passHref target="_blank">
              My Resume
            </Link>
            .
          </Paragraph>
        </Center>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>

        <BioSection>
          <BioYear>2021 – 2024</BioYear>
          Earned a degree in Computer Science, gaining strong foundations in software development,
          data structures, and system design through academic projects and practical experience.
        </BioSection>

        <BioSection>
          <BioYear>2024 - Present</BioYear>
          Working as a Software Engineer, contributing to the design, development, and deployment of scalable applications. Active open-source contributor, collaborating on community-driven projects.
        </BioSection>

      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Podcasts, Learning, Coding, Travel.
        </Paragraph>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Center>
          <Wrap spacing={2}>
            <IconButton
              icon={<FaLinux />}
              size="lg"
              fontSize="20px"
              variant="outline"
              border="none"
            />
            <IconButton
              icon={<IoLogoJavascript />}
              size="lg"
              fontSize="20px"
              variant="outline"
              border="none"
            />
            <IconButton
              icon={<FaReact />}
              size="lg"
              fontSize="20px"
              variant="outline"
              border="none"
            />
            <IconButton
              icon={<FaGolang />}
              size="lg"
              fontSize="20px"
              variant="outline"
              border="none"
            />
            <IconButton
              icon={<FaJava />}
              size="lg"
              fontSize="20px"
              variant="outline"
              border="none"
            />
          </Wrap>
        </Center>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ganeshbabugb" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @ganeshbabugb
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href="https://www.linkedin.com/in/ganeshbabu25/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<AiOutlineLinkedin />}
              >
                ganeshbabu25
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href="mailto:dev.ganeshbabu.in@gamil.com?subject=Heyy Ganesh!&body=Start typing..."
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMailOutline />}
              >
                dev.ganeshbabu.in@gamil.com
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
