import { Route, Routes } from "react-router-dom"
import { LayoutComponent } from "./components/layout"
import { ContactPage } from "./pages/contacts"

export const Routers = () => {

  return(
    <Routes>
    <Route path="/" element={<LayoutComponent />}>
      <Route path="/contacts" element={<ContactPage />}/>
    </Route>
    </Routes>
  )
}