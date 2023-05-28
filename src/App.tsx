import { ChakraProvider } from '@chakra-ui/react'
import { FooterComponent } from './components/footer'
import { LoginComponent } from './components/login'
import { RegisterComponent } from './components/register'

function App() {
  
  return (
    
   <ChakraProvider>
    <LoginComponent />
    <RegisterComponent />
    {/* <FooterComponent /> */}
   </ChakraProvider>
  )
}

export default App
