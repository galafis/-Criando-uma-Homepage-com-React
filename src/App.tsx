import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box p={10} textAlign="center">
      <VStack spacing={5}>
        <Heading as="h1" size="xl">Bem-vindo à Página Inicial</Heading>
        <Text fontSize="lg">Este é um projeto com Chakra UI e TypeScript!</Text>
        <Button colorScheme="teal" onClick={() => setCount(count + 1)}>
          Clique aqui ({count})
        </Button>
      </VStack>
    </Box>
  );
}

export default App;