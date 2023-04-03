const app = require('./app')
const connectDatabase = require('./config/database')

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "config/config.env"});
}


//UnCaught Excception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`)
    console.log(`Shutting down server due to Uncaught Exception`)
    process.exit(1)
})

//connection database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})


//Unhandled Promise Rejection
process.on('unHandledException', error => {
    console.log(`Error: ${error.message}`)
    console.log(`Shutting down the server due to unhandled promise rejection`)

    server.close(() => {
        process.exit(1);
    });
});