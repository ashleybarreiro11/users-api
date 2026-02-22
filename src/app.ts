import express, { Router } from 'express';
import { PORT, NODE_ENV } from './config'; //option + esc para ver la variable que exporté
import { UserRouter } from './features/users/user.router';
import cors from 'cors';
import { UserController } from './features/users/user.controller';
import { errorMiddleware } from './middlewares/errorsMiddleware';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log(req.query);
  return res.send('Home!!');
});

const apiRouter = Router();
app.use('/api', apiRouter);

const userController = new UserController();

const userRouter = new UserRouter(userController);
apiRouter.use(userRouter.router);

app.use(errorMiddleware);

if (NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
