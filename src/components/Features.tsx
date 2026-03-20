import { Box, SimpleGrid, Heading, Text, VStack, Container } from '@chakra-ui/react'

interface FeatureCardProps {
  emoji: string
  title: string
  description: string
}

function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  return (
    <VStack
      p={8}
      bg="white"
      borderRadius="xl"
      boxShadow="lg"
      spacing={4}
      align="start"
      _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl' }}
      transition="all 0.3s"
    >
      <Text fontSize="3xl">{emoji}</Text>
      <Heading size="md">{title}</Heading>
      <Text color="gray.600">{description}</Text>
    </VStack>
  )
}

const features = [
  {
    emoji: '⚡',
    title: 'TypeScript',
    description: 'Tipagem estática para código robusto e manutenível com detecção de erros em tempo de compilação.',
  },
  {
    emoji: '🎨',
    title: 'Chakra UI',
    description: 'Design system acessível e customizável com suporte a temas dark/light mode.',
  },
  {
    emoji: '🚀',
    title: 'Vite',
    description: 'Build tool ultrarrápido com Hot Module Replacement para desenvolvimento ágil.',
  },
  {
    emoji: '📱',
    title: 'Responsivo',
    description: 'Layout adaptável a qualquer dispositivo com grid system flexível.',
  },
]

export function Features() {
  return (
    <Box id="features" py={20} bg="gray.50">
      <Container maxW="1200px">
        <Heading textAlign="center" mb={12}>Tecnologias & Features</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
