import { Box, Flex, Heading, HStack, Link, useColorMode, IconButton } from '@chakra-ui/react'

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box as="header" bg="teal.500" color="white" px={8} py={4} position="sticky" top={0} zIndex={10}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Heading size="md">React Homepage</Heading>
        <HStack spacing={6}>
          <Link href="#features" _hover={{ textDecoration: 'none', opacity: 0.8 }}>Features</Link>
          <Link href="#about" _hover={{ textDecoration: 'none', opacity: 0.8 }}>Sobre</Link>
          <Link href="#contact" _hover={{ textDecoration: 'none', opacity: 0.8 }}>Contato</Link>
          <IconButton
            aria-label="Alternar tema"
            icon={<span>{colorMode === 'light' ? '🌙' : '☀️'}</span>}
            onClick={toggleColorMode}
            variant="ghost"
            color="white"
            size="sm"
          />
        </HStack>
      </Flex>
    </Box>
  )
}
