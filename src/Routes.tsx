import { Route, Routes } from "react-router-dom"
import { LayoutComponent } from "./components/layout"
import { ContactPage } from "./pages/contacts"
import { LoginPage } from "./pages/login"
import { CadastroPage } from "./pages/cadastro"
import { EntregadorPage } from "./pages/entregador"

export const Routers = () => {

  return (
    <Routes>
      <Route path="/" element={<LayoutComponent />}>
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/entregador" element={<EntregadorPage/>}/>
      </Route>
    </Routes>
  )
}