import { Route, Routes } from "react-router-dom"
import { LayoutComponent } from "./components/layout"
import { ContactPage } from "./pages/home"
import { LoginPage } from "./pages/login"
import { CadastroPage } from "./pages/cadastro"
import { EntregadorPage } from "./pages/entregador"
import { ClientePage } from "./pages/cliente"
import { RestaurantePage } from "./pages/selectRestaurant"

export const Routers = () => {


  return (
    <Routes>
      <Route path="/" element={<LayoutComponent />}>
        <Route path="/" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/entregador" element={<EntregadorPage />} />
        <Route path="/cliente" element={<ClientePage />} />
        <Route path="/restaurante/:restaurant_id" element={<RestaurantePage />} />
        <Route path="/restaurante/:restaurant_id/item/:item_id" element={<RestaurantePage />} />
      </Route>
    </Routes>
  )
}