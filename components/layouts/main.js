import { Box, Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Footer from "../footer";
import NavBar from "../navbar";
import VoxelDogLoader from "../voxel-dog-loader";

const LazyVoxelDog = dynamic(() => import("../voxel-dog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ganesh's homepage" />
        <meta name="author" content="Ganesh Babu" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Ganesh Babu - Website</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
