import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { DIRECTORY } from './config/uploading';
import './shared/database';
import globalErrorHandler from './shared/middlewares/globalErrorHandler';
import routes from './shared/routes';
import { started } from './utils/logger';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(DIRECTORY));
app.use(routes);

app.use(globalErrorHandler);

app.listen(3333, () => started(3333));
