import { ChakraProvider } from "@chakra-ui/react"
import { HeaderComponent } from "./components/header/indes"

function App() {
  
  return (
   <ChakraProvider>
      <HeaderComponent/>
   </ChakraProvider>
  )
}

export default App
