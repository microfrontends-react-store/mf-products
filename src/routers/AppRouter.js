import { Route, Routes } from "react-router-dom";
import { ProductDetailsScreen } from "./src/pages/ProductDetailsScreen";
import { ProductsScreen } from "./src/pages/productsScreen";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsScreen />}></Route>
      <Route
        path="/producto/:productId"
        element={<ProductDetailsScreen />}
      ></Route>
    </Routes>
  );
};
