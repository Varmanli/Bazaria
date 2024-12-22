import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

function ProductsContextProvider({ children }) {
  const [productId, setProductId] = useState();
  const [cartItems, setCartItems] = useState([]);

  function addToCart(id, title, price, image, totalPrice) {
    if (!cartItems?.find((item) => item.id === id)) {
      setCartItems([
        ...cartItems,
        {
          id: id,
          count: 1,
          title: title,
          image: image,
          price: price,
        },
      ]);
    } else
      setCartItems(
        cartItems?.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              count: item.count + 1,
            };
          } else return item;
        })
      );
    console.log(cartItems);
  }

  function removeFromCart(id) {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count === 0 ? 0 : item.count - 1,
          };
        } else return item;
      })
    );
  }

  function productIdHandler(id) {
    setProductId(id);
  }

  return (
    <ProductsContext.Provider
      value={{
        productId,
        productIdHandler,
        addToCart,
        cartItems,
        removeFromCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
