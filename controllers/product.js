const product = require("../models/product");

async function getProducts() {
  let products;
  try {
    products = await product.find({});
    return products;
  } catch (err) {
    console.log(err);
    return;
  }
}

module.exports = getProducts;
