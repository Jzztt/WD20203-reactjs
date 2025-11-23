import { Route, Routes } from "react-router";
import Product from "./pages/Product";
import LayoutAdmin from "./layouts/AdminLayout";
import User from "./pages/User";
import CreateProduct from "./components/CreateProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<LayoutAdmin />}>
          <Route path="product" element={<Product />} />
          <Route path="product/create" element={<CreateProduct />} />
          <Route path="product/update/:id" element={<UpdateProduct />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
