const express = require("express");
const products = require("./db/products");
const app = express();
const PORT = 5000;

// Middlewires
app.use(express.static("./public"));

// API endpoints
// GET /api/v1/products
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running in localhost:${PORT}`);
});
