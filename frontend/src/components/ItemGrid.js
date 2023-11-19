import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircularProgress from "@mui/material/CircularProgress";

export function ItemGrid({ items, handleAddToCart }) {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h5" sx={{ marginBottom: 1 }}>
        Best Deals
      </Typography>
      <Grid container spacing={4}>
        {items ? (
          items.map((item, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "80%",
                  }}
                  image={item.image}
                />
                <CardContent sx={{ flexGrow: 1, pb: "0px" }}>
                  <Typography gutterBottom variant="body2">
                    {item.title}
                  </Typography>
                  <Typography variant="body1">${item.price}</Typography>
                  <Stack direction={"row"} spacing={1}>
                    {" "}
                    <Rating
                      size="small"
                      value={item.rating.rate}
                      precision={0.1}
                    />
                    <Typography variant="caption">
                      ({item.rating.count})
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions>
                  <IconButton onClick={() => handleAddToCart(item)}>
                    <AddShoppingCartIcon />
                  </IconButton>
                  <IconButton>
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                {" "}
                <CircularProgress />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          sx={{
            display: "block",
            py: 1,
            px: 12,
            margin: "0 auto",
            mt: 6,
            width: "80%",
          }}
        >
          Load More
        </Button>
      </Grid>
    </Container>
  );
}
