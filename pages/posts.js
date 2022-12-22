import {
  Container,
  Heading,
  SimpleGrid,
  Center
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import qrImg from '../public/images/contents/qr-thumbnail.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>

      <Center>
        <Heading as="h1" variant="big-title">
          Popular Posts
        </Heading>
      </Center>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>

          <GridItem
            title="QR-Code generator using React-js"
            thumbnail={qrImg}
            href="https://qr-creater.netlify.app/"
          />

        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
