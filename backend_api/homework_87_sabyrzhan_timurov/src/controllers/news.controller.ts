
import { NewsService } from '@/services/news.service';
import { RequestHandler } from 'express';

export class NewsController {
  private service: NewsService;

  constructor() {
    this.service = new NewsService();
  }

  getAllNews: RequestHandler = (req, res): void => {
    const news = this.service.getAllNews;
    res.send(news);
  };

  getNews: RequestHandler = (req, res): void => {
    const news = this.service.getNew(req.params.id);
    res.send(news);
  };

  createNews: RequestHandler = (req, res): void => {
    const news = this.service.createNews(req.body);
    res.send(news);
  };
}
