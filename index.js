import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import { erroreMddeleware } from "./middlewares/errorMiddeleware.js";
import { router } from "./routes/router.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { swaggerOptions } from "./swagger.js";


const PORT = process.env.PORT || 3000;
const app = express();
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.json());
app.use(cookieParser());
app.use('/api',router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(erroreMddeleware);

const start = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL)
      .then(() => console.log('Connected!'));

    app.listen(PORT, () => {
      console.log(`Server has been started in port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start(); 
