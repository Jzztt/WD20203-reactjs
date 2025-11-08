import { Route, Routes } from "react-router";
import Product from "./pages/Product";
import LayoutAdmin from "./layouts/AdminLayout";
import User from "./pages/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="product" element={<Product />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
