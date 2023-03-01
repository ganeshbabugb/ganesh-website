import { Center, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbnvim from '../public/assets/images/contents/nvim.png'
import thumbqrImg from '../public/assets/images/contents/qr-thumbnail.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Center>
        <Heading as="h1" variant="big-title">
          Posts
        </Heading>
      </Center>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My Nvim v0.8 Setup for Daily Workflow"
            thumbnail={thumbnvim}
            href="https://github.com/ganeshbabugb/NVIM23"
          />
          <GridItem
            title="Create a QR Code generator using React.js"
            thumbnail={thumbqrImg}
            href="https://qr-creater.netlify.app/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
