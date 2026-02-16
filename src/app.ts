import express, { Router } from 'express';
import { PORT, NODE_ENV } from './config'; //option + esc para ver la variable que exporté
import { UserRouter } from './features/users/user.router';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req.query);
  return res.send('Home!!');
});

const apiRouter = Router();
app.use('/api', apiRouter);

const userRouter = new UserRouter();
apiRouter.use(userRouter.router);

if (NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
