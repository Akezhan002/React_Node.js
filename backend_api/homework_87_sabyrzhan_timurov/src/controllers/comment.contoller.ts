
import { CommentService } from '@/services/comment.service';
import { RequestHandler } from 'express';

export class CommentController {
  private service: CommentService = new CommentService()

  getAllComments: RequestHandler = (req, res): void => {
    const comments = this.service.getAllComments;
    res.send(comments);
  };

  getComment: RequestHandler = (req, res): void => {
    const comment = this.service.getComment(req.params.id);
    res.send(comment);
  };

  createComments: RequestHandler = (req, res): void => {
    const comment = this.service.createComment(req.body);
    res.send(comment);
  };
}
