const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser())

const errorMiddleware = require("./middlerware/error")

//Route mports
const products = require("./routes/productRoute")
const user = require("./routes/userRoute")
const order = require("./routes/orderRoute")

app.use("/api/v1",products)
app.use("/api/v1",user)
app.use("/api/v1",order)

//Middleware for error 
app.use(errorMiddleware)

module.exports = app;
