import { Route, Routes } from "react-router-dom"
import { LayoutComponent } from "./components/layout"
import { ContactPage } from "./pages/contact"
import { LoginPage } from "./pages/login"
import { CadastroPage } from "./pages/cadastro"
import { EntregadorPage } from "./pages/entregador"
import { RestaurantListPage } from "./pages/home"
import { CarrinhoPage } from "./pages/cliente/carrinho"
import { ClientePage } from "./pages/cliente/pedidosCliente"
import { RestaurantePage } from "./pages/restaurante/selectRestaurant"
import { ItemCreatePage } from "./pages/restaurante/criarNovoItem"

export const Routers = () => {


  return (
    <Routes>
      <Route path="/" element={<LayoutComponent />}>
        <Route path="/" element={<RestaurantListPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/entregador" element={<EntregadorPage />} />
        <Route path="/cliente/pedidos" element={<ClientePage />} />
        <Route path="/cliente/carrinho" element={<CarrinhoPage />} />
        <Route path="/restaurante/createitem" element={<ItemCreatePage/>}/>
        <Route path="/restaurante/:restaurant_id" element={<RestaurantePage />} />
        <Route path="/restaurante/:restaurant_id/item/:item_id" element={<RestaurantePage />} />
      </Route>
    </Routes>
  )
}