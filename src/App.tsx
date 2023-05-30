import { ChakraProvider } from '@chakra-ui/react'
import { Routers } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyles'
import { AuthProvider } from './context/authContext'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <ChakraProvider toastOptions={{ defaultOptions: { position: 'bottom' } }}>
          <GlobalStyle />
          <Routers />
        </ChakraProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
