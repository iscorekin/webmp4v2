import express, { Request, Response } from 'express';
import compression from 'compression';
import helmet from 'helmet';

const app: express.Application = express();

app.get('/', (req: Request, res: Response) =>
  res.send('Hello World from app.ts! Awesome!!')
);

app.use(helmet());
app.use(compression());

app.disable('x-powered-by');

const server = app.listen(3000, () =>
  console.log('Starting ExpressJS server on Port 3000')
);

export default server;
