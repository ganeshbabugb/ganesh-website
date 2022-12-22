import React, { useState } from 'react'

import { FcGoogle } from 'react-icons/fc';

import { FaGithub } from "react-icons/fa";

import { initializeApp } from "firebase/app";

import {
  IoSend,
  IoCall
} from "react-icons/io5";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";

import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  FormControl,
  Input,
  HStack,
  PinInput,
  PinInputField,
  IconButton,
  Alert,
  AlertIcon
} from '@chakra-ui/react';

const Config = {
  apiKey: "AIzaSyAyZLEeJpPhJuop5uU-ZOzI366o69GSeDM",
  authDomain: "ganesh-2bed9.firebaseapp.com",
  projectId: "ganesh-2bed9",
  storageBucket: "ganesh-2bed9.appspot.com",
  messagingSenderId: "795313981435",
  appId: "1:795313981435:web:a90775290625d8bacbad5e"
};

// Initialize Firebase
const app = initializeApp(Config);

const authentication = getAuth(app);

const Sign = () => {

//hooks
  const [expandForm, setExpandForm] = useState(false);
  const [user, setUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [phoneNumber, setphoneNumber] = useState('');
  const [OTP, setOTP] = useState();

  const HandleInputChange = (e) => setphoneNumber(e.target.value);
  const HandleOTPChange = (e) => setOTP(e);

//OTP
  const GenerateRechptcha = () => {
       window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
       'size': 'invisible',
       'callback': () => {
       // reCAPTCHA solved, allow signInWithPhoneNumber.
       onSignInSubmit();
      }
    }, authentication);
  }

  const RequestOTP = (e) => {
      e.preventDefault();
      if(phoneNumber.length >= 10){
        setExpandForm(true);
        GenerateRechptcha();
        let appVerifier = window.recaptchaVerifier;
        let phonenumber = "+91"+phoneNumber;
        console.log(phonenumber);
        signInWithPhoneNumber(authentication, phonenumber, appVerifier)
          .then((confirmationResult) => {
              window.confirmationResult = confirmationResult;
          }).catch(() => {
          });
      }
  }

  const VerifyOTP = () => {
      let confirmationResult = window.confirmationResult;
      if(OTP.length===6){
        confirmationResult.confirm(OTP)
        .then(() => {
        setExpandForm(false);
        setUser(false);
        setUserCreated(true);
        setTimeout(() => setUserCreated(false) , 2000);
      }).catch(() => {
          setUser(true);
          setTimeout(() => setUser(false) , 3000);
      });
    }
  }

//Google
  const signInWithGoogle = () => {
    signInWithPopup(authentication, new GoogleAuthProvider())
    .then((re)=>{
      console.log(re); //it return a user object in console
      setUserCreated(true);
      setTimeout(() => setUserCreated(false) , 2000);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

//Github
  const signInWithGithub = () => {
    signInWithPopup(authentication, new GithubAuthProvider())
    .then((re)=>{
      console.log(re); //it return a user object in console
      setUserCreated(true);
      setTimeout(() => setUserCreated(false) , 2000);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  //rest-of-code
  return (
    <Box>
    <Center p={8}>
    <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>

      <Heading as="h1" variant="big-title">Register</Heading>

      {
        userCreated
        ?
          <Alert status='success'>
            <AlertIcon />
              Your Account Has Been Successfully Created.
            </Alert>
        :
        null
      }

      <FormControl>

        <HStack>
            <IconButton icon={<IoCall />} size='md' aria-label='Call Segun'/>
            <Input type="number" onChange={HandleInputChange} value={phoneNumber} variant='filled'/>
            <IconButton icon={<IoSend />} onClick={RequestOTP} colorScheme='teal' size='md' type='submit'/>
        </HStack>

      {
        expandForm
        ?
        <>
        <Center mt='3'>
          <HStack spacing={1}>
            <PinInput size='md' variant='filled' onChange={HandleOTPChange} placeholder="_" otp>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </Center>
        <Center>
          <Button variant={'solid'} colorScheme='teal' size='md' mt='3' onClick={VerifyOTP}>
            Verify
          </Button>
        </Center>
        </>
        :
        null
      }

      {
        user
        ?
          <Center><Text as='b' fontSize='sm' mt='2'>INVALID OTP!</Text></Center>
        :
        null
      }

      </FormControl>

      <Center my={'3'}>
        <div id="recaptcha-container" />
      </Center>

      <Text as="b" fontSize={'sm'} p={2}> (OR) </Text>

      <Button
        w={'full'}
        maxW={'md'}
        variant={'solid'}
        leftIcon={<FcGoogle />}
        onClick={signInWithGoogle}>
        <Center>
          <Text> Continue with Google </Text>
        </Center>
      </Button>

      <Button
        w={'full'}
        maxW={'md'}
        variant={'solid'}
        leftIcon={<FaGithub />}
        onClick={signInWithGithub}>
        <Center>
          <Text>Continue with Github</Text>
        </Center>
      </Button>
    </Stack>
    </Center>
    </Box>
  )}

export default Sign
