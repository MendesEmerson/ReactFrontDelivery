import { ChakraProvider } from '@chakra-ui/react'
import { Routers } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyles'
import { AuthProvider } from './context/authContext'

function App() {

  return (
    <BrowserRouter>
      <ChakraProvider>
        <AuthProvider>
          <GlobalStyle />
          <Routers />
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
