const express = require("express");
//const products = require("./db/products");
const getProducts = require("./controllers/product");
const app = express();
const PORT = 5000;
require("./db/connect");

// Middlewires
app.use(express.static("./public"));
app.use(express.json());

// API endpoints
// GET /api/v1/products
app.get("/api/v1/products", async (req, res) => {
  products = await getProducts();
  res.json({ products });
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT http://localhost:${PORT}`);
});
