import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { ItemGrid } from "./components/ItemGrid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

export default function App() {
  const [items, setItems] = useState();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/v1/products");
        const { products } = await res.json();
        if (products) {
          setItems(products);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  });

  const handleAddToCart = (clickedItem) => {
    //console.log(clickedItem);
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [])
    );
  };
  return (
    <Box>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        elevation={5}
      >
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <Header
        numCartItems={cartItems.length}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      <Container maxWidth="lg">
        <ItemGrid items={items} handleAddToCart={handleAddToCart} />
        <Footer />{" "}
      </Container>
    </Box>
  );
}
