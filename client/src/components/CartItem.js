import { Button, Container, Grid, Stack, Typography } from "@mui/material";

const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <Container sx={{ py: 2, mb: 1, borderBottom: "1px solid lightgrey" }}>
      <Grid
        container
        maxWidth="xs"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={6}>
          <Typography variant="body1">{item.title}</Typography>
          <div className="information">
            <p>Price: ${item.price}</p>
            <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Button
              size="small"
              disableElevation
              variant="outlined"
              onClick={() => removeFromCart(item.id)}
            >
              -
            </Button>
            <p>{item.amount}</p>
            <Button
              size="small"
              disableElevation
              variant="outlined"
              onClick={() => addToCart(item)}
            >
              +
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <img
            src={item.image}
            alt={item.title}
            style={{ maxWidth: "100px" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartItem;
