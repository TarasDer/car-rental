import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../SharedLayout/Layout";
import HomePage from "../../pages/HomePage";
import CatalogPage from "../../pages/CatalogPage";
import FavoritePage from "../../pages/FavoritePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
