<<<<<<< HEAD
import { useState } from "react";
import React from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="purple.500" />
        <Heading color="purple.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="purple"
                width="full"
              >
                Login
              </Button>
            </Stack>

          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="purple.500" href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
=======
import { useState } from "react";
import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Logo } from './Logo'
import { PasswordField } from './PasswordField'

export const Login = () => (
  <Box
  w='100%' h='100%' bgGradient='linear(to-r, blue.200, purple.500)'
    // py={{
    //   base: '12',
    //   md: '24',
    // }}
    // px={{
    //   base: '0',
    //   sm: '8',
    // }}
  >
    <Stack w='100%' h='100%' spacing="8" py={{
      base: '12',
      md: '24',
    }}
    px={{
      base: '0',
      sm: '8',
    }} >
      <Box
      maxWidth="lg"
        py={{
          base: '0',
          sm: '8',
        }}
        px={{
          base: '4',
          sm: '10',
        }}
        bg={{
          base: 'transparent',
          sm: 'bg-surface',
        }}
        boxShadow={{
          base: 'none',
          sm: 'lg',
        }}
        borderRadius={{
          base: 'none',
          sm: 'xl',
        }}
        border="1px"
        backgroundColor="white"
      >
        <Stack spacing="6">
        <Logo />
        <Stack
          spacing={{
            base: '2',
            md: '3',
          }}
          textAlign="center"
        >
          <Heading
            size={{
              base: 'xs',
              md: 'sm',
            }}
          >
            Log in to your account
          </Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">Don't have an account?</Text>
            <Button variant="link" colorScheme="purple">
              Sign up
            </Button>
          </HStack>
        </Stack>
      </Stack>
        <Stack spacing="6" mt="3rem">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button variant="link" colorScheme="purple" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button variant="solid" colorScheme="purple">Sign in</Button>
            <HStack>
              <Text
              fontSize="sm"
              textAlign="center"
              color='gray.600'
            >
              By continuing, you acknowledge that you have read, understood, and agree to our terms and condition
            </Text>
            </HStack>
            {/* <OAuthButtonGroup /> */}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Box>
)
export default Login;
>>>>>>> b15d1d7f71c935a740751d813ce789fe0c42fb80
