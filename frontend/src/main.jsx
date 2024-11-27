import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin.jsx";
import ProductsCreate from "./ProductsCreate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="admin" element={<Admin />}></Route>
      <Route path="admin/createProduct" element={<ProductsCreate />}></Route>
    </Routes>
  </BrowserRouter>
);
