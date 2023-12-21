import cors from 'cors';
import App from './app';
import logger from './middlewares/logger';
import { NewsRoute } from './routes/news.route';
import { CommentRoute } from './routes/comment.route';


const app = new App({
  port: 8000,
  middlewares: [logger(), cors()],
  controllers: [new NewsRoute(), new CommentRoute()],
});

app.listen();
