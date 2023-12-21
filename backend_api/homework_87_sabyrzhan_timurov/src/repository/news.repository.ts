
import { artistDataSource } from "@/dataSource";
import { News } from "@/entites/news";
import { INews } from "@/interfaces/INews.interface";
import { Repository } from "typeorm";

export class NewsRepository extends Repository<News> {
    constructor(){
        super(News, artistDataSource.createEntityManager())
    }

    async getNews() {
        return this.find()
    }

    async getNew(id: string) {
        return await this.findOne({
            where: {id},
        });
    }

    async creatNews(newsDto: INews) {
        const news = this.create({
            ...newsDto
        });
        return await this.save(news)
    }
}
