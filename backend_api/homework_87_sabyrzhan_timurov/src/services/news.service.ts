import { INews } from "@/interfaces/INews.interface";
import { NewsRepository } from "@/repository/news.repository";


export class NewsService {
  private repository: NewsRepository = new NewsRepository();

  getAllNews = async():Promise<INews[]> => {
    return await this.repository.getNews()
  };

  getNew = async(id: string): Promise<INews | null> => {
    return await this.repository.getNew(id)
  };

  createNews = async(data: INews): Promise<INews> => {
    return await this.repository.creatNews(data)
  };
}
