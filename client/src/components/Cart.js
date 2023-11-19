import CartItem from "./CartItem";
import { Container, Typography } from "@mui/material";

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  return (
    <Container sx={{ px: 4, py: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Container>
  );
};

export default Cart;
