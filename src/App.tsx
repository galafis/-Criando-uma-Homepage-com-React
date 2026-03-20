import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Footer } from './components/Footer'

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#319795',
      secondary: '#2C7A7B',
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </ChakraProvider>
  )
}
