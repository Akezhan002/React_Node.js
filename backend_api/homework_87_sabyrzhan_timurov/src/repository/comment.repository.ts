
import { artistDataSource } from "@/dataSource";
import { Comment } from "@/entites/comment";
import { News } from "@/entites/news";
import { IComment } from "@/interfaces/IComment.inteface";
import { Repository } from "typeorm";

export class CommentRepository extends Repository<Comment> {
    constructor(){
        super(News, artistDataSource.createEntityManager())
    }

    async getComments() {
        return this.find()
    }

    async getComment(id: string) {
        return await this.findOne({
            where: {id},
        });
    }

    async creatComment(commentDto: IComment) {
        const comment = this.create({
            ...commentDto
        });
        return await this.save(comment)
    }
}
