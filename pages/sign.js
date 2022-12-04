import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { IoSend, IoCall } from "react-icons/io5";
import { Button, Center, Heading, Stack, Text, FormControl, FormLabel, Input, HStack, PinInput, PinInputField, IconButton, Box } from '@chakra-ui/react';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

  const [expandForm, setExpandForm] = useState(false);
  const [user, setUser] = useState(false);
  const [phoneNumber, setphoneNumber] = useState('');
  const [OTP, setOTP] = useState();

  const HandleInputChange = (e) => setphoneNumber(e.target.value);
  const HandleOTPChange = (e) => setOTP(e);

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
        confirmationResult.confirm(OTP).then((result) => {
        const user = result.user;
        console.log("user created" + user);
        setExpandForm(false);
        setUser(false);
      }).catch(() => {
          setUser(true);
      });
    }
  }

  return (
    <Box>
    <Center p={8}>
    <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>

    <Heading as="h1" my={3}>Register</Heading>
      <FormControl>

        <FormLabel mt='3'>Enter mobile number</FormLabel>
          <HStack>
              <IconButton icon={<IoCall />} size='md' aria-label='Call Segun'/>
              <Input type="number" onChange={HandleInputChange} value={phoneNumber} variant='filled'/>
              <IconButton icon={<IoSend />} onClick={RequestOTP} colorScheme='teal' size='md' type='submit'/>
          </HStack>

      { expandForm === true ?
        <>
        <FormLabel mt='3'>Enter OTP</FormLabel>
        <Center>
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
          <Button variant={'solid'} colorScheme='teal' size='md' my='3' onClick={VerifyOTP}>
            Verify
          </Button>
        </Center>
        </>
      : null
    }

      {
        user === true
        ?
          <Center><Text as='b' fontSize='sm'>INVALID OTP!</Text></Center>
        :
        null
      }

      </FormControl>

      <Center>
        <div id="recaptcha-container" />
      </Center>

      <Button
        w={'full'}
        maxW={'md'}
        variant={'solid'}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text> Continue with Google </Text>
        </Center>
      </Button>
      <Button
        w={'full'}
        maxW={'md'}
        variant={'solid'}
        leftIcon={<FaGithub />}>
        <Center>
          <Text> Continue with Github </Text>
        </Center>
      </Button>
    </Stack>
    </Center>
    </Box>
  )}

export default Sign
