import "reflect-metadata";

import express from "express";
import "express-async-errors";

import routes from "./routes";

import cors from "cors";

import { started } from "./utils/logger";
import { DIRECTORY } from "./config/uploading";

import globalErrorHandler from "./middlewares/globalErrorHandler";

import "./database";


const app = express();

app.use(cors());
app.use(express.json())
app.use("/files", express.static(DIRECTORY));
app.use(routes);

app.use(globalErrorHandler);

app.listen(3333, () => started(3333));