import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFoundHandler from './app/middleware/notfoundError';
const app: Application = express();

app.use(
  cors({
    origin: ['*'],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);
app.use(notFoundHandler);

export default app;