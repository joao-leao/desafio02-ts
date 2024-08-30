import { Button } from '@chakra-ui/react'

export const ComponentButton = ({ Click }: {Click: () => void}) => {
    return(
        <Button onClick={Click} colorScheme='green' w="100%" h="60px" fontSize="20px" >Login</Button>
    )
}