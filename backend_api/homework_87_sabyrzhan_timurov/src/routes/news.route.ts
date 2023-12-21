import { Router } from 'express';
import { IRoute } from '../interfaces/IRoute.interface';
import { NewsController } from '@/controllers/news.controller';

export class NewsRoute implements IRoute {
  public path = '/news';
  public router = Router();
  private controller: NewsController;

  constructor() {
    this.controller = new NewsController();
    this.init();
  }

  private init() {
    this.router.get('/', this.controller.getAllNews);
    this.router.get('/:id', this.controller.getNews);
    this.router.post('/', this.controller.createNews);
  }
}
