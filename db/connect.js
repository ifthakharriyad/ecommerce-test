const mongoose = require("mongoose");

try {
  mongoose
    .connect(
      "mongodb+srv://ecomm-user-test:ecomm-user-test@ecommerce-test.lnojpho.mongodb.net/ecommerce?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        //   useCreateIndex: true,
        //   useFindAndModify: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("DATABASE CONNECTED SUCCESSFULLY!!");
    });
} catch (err) {
  console.log(err);
}
