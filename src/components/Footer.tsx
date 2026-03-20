import { Box, Container, Text, HStack, Link, Divider, VStack } from '@chakra-ui/react'

export function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="gray.300" py={10}>
      <Container maxW="1200px">
        <VStack spacing={4}>
          <HStack spacing={8}>
            <Link href="https://github.com/galafis" isExternal _hover={{ color: 'white' }}>
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/gabriel-lafis" isExternal _hover={{ color: 'white' }}>
              LinkedIn
            </Link>
          </HStack>
          <Divider borderColor="gray.600" />
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Gabriel Lafis. MIT License.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
