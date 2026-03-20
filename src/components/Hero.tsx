import { Box, Heading, Text, Button, VStack, HStack, Container } from '@chakra-ui/react'

export function Hero() {
  return (
    <Box
      bgGradient="linear(to-r, teal.400, teal.600)"
      color="white"
      py={20}
    >
      <Container maxW="1200px">
        <VStack spacing={6} align="start">
          <Heading size="2xl" fontWeight="bold">
            Interfaces Modernas com React & TypeScript
          </Heading>
          <Text fontSize="xl" maxW="600px" opacity={0.9}>
            Homepage responsiva demonstrando componentização, gerenciamento de estado
            e design system com Chakra UI, Vite e TypeScript.
          </Text>
          <HStack spacing={4}>
            <Button size="lg" colorScheme="whiteAlpha" variant="solid">
              Ver Código
            </Button>
            <Button size="lg" variant="outline" color="white" borderColor="white">
              Live Demo
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}
