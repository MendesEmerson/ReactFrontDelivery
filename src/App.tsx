import { ChakraProvider } from '@chakra-ui/react'
import { Routers } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyles'

function App() {
  
  return (
    <BrowserRouter>
    <ChakraProvider>
      <GlobalStyle />
      <Routers />
    </ChakraProvider>
   </BrowserRouter>
  )
}

export default App
