import { Router } from 'express';
import { IRoute } from '../interfaces/IRoute.interface';
import { CommentController } from '@/controllers/comment.contoller';

export class CommentRoute implements IRoute {
  public path = '/news';
  public router = Router();
  private controller: CommentController;

  constructor() {
    this.controller = new CommentController();
    this.init();
  }

  private init() {
    this.router.get('/', this.controller.getAllComments);
    this.router.get('/:id', this.controller.getComment);
    this.router.post('/', this.controller.createComments);
  }
}
