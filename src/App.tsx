import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="product" element={<Product />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
