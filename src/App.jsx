import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductsContextProvider from "./features/ProductsContext";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import ProductListMobile from "./pages/ProductListMobile";
import Header from "./UI/Header";
import MobileMenu from "./UI/MobileMenu";
import Footer from "./UI/Footer";
import CategryMobilePage from "./pages/CategryMobilePage";
import ProductListBook from "./pages/ProductListBook";
import ProductListJavaher from "./pages/ProductListJavaher";
import ProductListPoshak from "./pages/ProductListPoshak";
import ProductListKitchen from "./pages/ProductListKitchen";
import ProductListSuperMarket from "./pages/ProductListSuperMarket";
import ShoppingCart from "./pages/ShoppingCart";
import ProductUI from "./UI/ProductUI";

function App() {
  const queryClient = new QueryClient();

  return (
    <ProductsContextProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Product" element={<ProductUI />} />
            <Route path="/ProductListMobile" element={<ProductListMobile />} />
            <Route path="/productListBook" element={<ProductListBook />} />
            <Route path="/productListPoshak" element={<ProductListPoshak />} />
            <Route
              path="/productListKitchen"
              element={<ProductListKitchen />}
            />
            <Route
              path="/productListSuperMarket"
              element={<ProductListSuperMarket />}
            />
            <Route
              path="/productListJavaher"
              element={<ProductListJavaher />}
            />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
            <Route path="/Category" element={<CategryMobilePage />} />
          </Routes>
          <MobileMenu />
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </QueryClientProvider>
    </ProductsContextProvider>
  );
}
export default App;
