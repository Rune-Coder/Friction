import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import importData from "./dataImport.js";
import productRoute from "./routers/productRouter.js";
import { errorHandler, notFound } from "./middleware/error.js";
import userRoute from "./routers/userRouter.js";

dotenv.config();
connectDatabase();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//api
app.use("/api/import", importData);
app.use("/api/products", productRoute);
app.use("/api/user", userRoute);

//error handler
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res)=> {
    res.send("API is running...");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log("server running in port "+ PORT));
