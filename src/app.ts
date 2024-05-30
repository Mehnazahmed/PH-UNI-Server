import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

//parser
app.use(express.json());
app.use(cors());

//app routes
app.use('/api/v1', router);

//notFound

app.use(notFound);
app.use(globalErrorHandler);

export default app;
