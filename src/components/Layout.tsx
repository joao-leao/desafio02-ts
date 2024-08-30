import { Footer } from "./Footer"
import { Header } from "./Header"
import { Card } from "./Card"
import { Flex, Box } from '@chakra-ui/react'


export const Layout = () => {
  return(
    <>
      <Flex direction="column" minH="100vh">
        <Box flex="1" bg="#9851EE">
          <Header />
          <Card />
        </Box>
          <Footer />
      </Flex>
    </>
  )
}
