import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Center,
  Wrap,
  IconButton
} from '@chakra-ui/react'

import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoWhatsapp,
  IoMailOutline,
  IoLogoFirebase
} from 'react-icons/io5'

import {
  FaReact,
  FaSass,
  FaLinux,
  FaGithub
} from 'react-icons/fa'

import {
  IoLogoJavascript
} from 'react-icons/io'

import {
  CgProfile
} from "react-icons/cg";

import Image from 'next/image'

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
        Hello, I&apos;m an independent web developer from India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ganesh babu
          </Heading>
          <p>( Developer / Designer / Sysadmin )</p>
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
              src="/images/ganesh.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          Ganesh is a freelancer and a
          {' '}
          <Link href="https://wikitia.com/wiki/MERN_(solution_stack)" target="_blank">
            FULL-STACK
          </Link>
          {' '}
          Developer based in India with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his friends.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in {' '}
          <Link href="https://en.wikipedia.org/wiki/Tamil_Nadu" target="_blank">
          Tamilnadu ( தமிழ்நாடு )
          </Link>, India.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Master&apos;s Program in {' '}
            <Link href="https://en.wikipedia.org/wiki/Category:Linux_administration" target="_blank">
            Linux Administration
            </Link>.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Master&apos;s Program in {' '}
            <Link href="https://en.wikipedia.org/wiki/Front-end_web_development" target="_blank">
            Front-end web development
            </Link>.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Working as a freelancer.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Drawing,{' '}
          <Link href="https://open.spotify.com/track/4OtqlH4UCGzV8fLy36STjE?si=-UyDWsQFQfqmLdBPzzNbwg&utm_source=native-share-menu" target="_blank">
            Music
          </Link>
          , Photography, Travel, Learning.
        </Paragraph>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Center>
          <Wrap spacing={2}>
          <IconButton icon={<FaLinux />} size='lg' fontSize='20px' variant='outline'/>
          <IconButton icon={<FaReact />}  size='lg' fontSize='20px' variant='outline'/>
          <IconButton icon={<FaSass />} size='lg' fontSize='20px' variant='outline'/>
          <IconButton icon={<IoLogoJavascript />} size='lg' fontSize='20px' variant='outline'/>
          <IconButton icon={<FaGithub />} size='lg' fontSize='20px' variant='outline'/>
          <IconButton icon={<IoLogoFirebase />} size='lg' fontSize='20px' variant='outline'/>
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
                @Ganesh-Babu-GB
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://instagram.com/ganeshbabu___" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @ganeshbabu___
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://wa.me/7010144395?text=Heyy%20Ganesh!" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWhatsapp />}
              >
                +91 7010144395
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="mailto:dev.ganeshbabu.in@gamil.com?subject=Heyy Ganesh!&body=Start typing..." target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMailOutline />}
              >
               dev.ganeshbabu.in@gamil.com
              </Button>
            </Link>
          </ListItem>

          <Center>
          <ListItem>
            <Link href="https://drive.google.com/uc?export=download&id=1ozU-ldm6r7E73huDk_x9wwq9E_Kjx4Kl" target="_blank">
              <Button
                variant="ghost"
                colorScheme="whatsapp"
                leftIcon={<CgProfile />}
              >
                Save Contact
              </Button>
            </Link>
          </ListItem>
          </Center>

        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
