
import { News } from "@/entites/news";
import { Comment } from "@/entites/comment";
import { DataSourceOptions } from "typeorm";

export const artistDBConnect: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Akodi2005',
    database: 'bd_exam',
    synchronize: false,
    logging: true,
    entities: [
        News,
        Comment
    ]
}
