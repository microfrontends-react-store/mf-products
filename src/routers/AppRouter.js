import { Route, Routes } from "react-router-dom";
import { ProductDetailsScreen } from "../pages/ProductDetailsScreen";
import { ProductsScreen } from "../pages/productsScreen";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsScreen />}></Route>
      <Route path=":productId" element={<ProductDetailsScreen />}></Route>
    </Routes>
  );
};
