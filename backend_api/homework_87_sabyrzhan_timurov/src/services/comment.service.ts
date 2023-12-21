import { IComment } from "@/interfaces/IComment.inteface";
import { CommentRepository } from "@/repository/comment.repository";


export class CommentService {
  private repository: CommentRepository = new CommentRepository();

  getAllComments = async():Promise<IComment[]> => {
    return await this.repository.getComments()
  };

  getComment = async(id: string): Promise<IComment | null> => {
    return await this.repository.getComment(id)
  };

  createComment = async(data: IComment): Promise<IComment> => {
    return await this.repository.creatComment(data)
  };
}
