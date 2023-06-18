import { ChakraProvider } from '@chakra-ui/react'
import { Routers } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyles'
import { AuthProvider } from './context/authContext'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <BrowserRouter>
      <RecoilRoot>
        <AuthProvider>
          <ChakraProvider toastOptions={{ defaultOptions: { position: 'bottom' } }}>
            <GlobalStyle />
            <Routers />
          </ChakraProvider>
        </AuthProvider>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
