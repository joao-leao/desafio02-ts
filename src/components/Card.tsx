import { Flex, Text, Input, FormControl } from '@chakra-ui/react'
import { ComponentButton } from "./Button"
import { login } from '../services/login'

export const Card = () => {
  return(
    <Flex as="main" w="100%" align="center" justify="center">
      <FormControl  w="600px" p={16} bg="white" rounded="md" textAlign="center" mt={5}>
          <Text textAlign="center" fontSize="28px" color="gray.700" mb={2}>Faça o login</Text>
          <Input type="email" placeholder="email" mb={2} size="lg" ></Input>
          <Input type="password" placeholder="senha" mb={2} size="lg" ></Input>
          <ComponentButton Click={login} ></ComponentButton>
      </FormControl>
    </Flex>
  )
}