
const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/ECOMBACK", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
};

module.exports = connectDatabase;
