import { BrowserRouter } from "react-router-dom";
import { ProductsScreen } from "./pages/productsScreen";
import { AppRouter } from "./routers/AppRouter";

export default function Root(props) {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
