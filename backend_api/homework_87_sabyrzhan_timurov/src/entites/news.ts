
import { Column, Entity, PrimaryColumn } from "typeorm";
import { INews } from "@/interfaces/INews.interface";

@Entity()
export class News implements INews {

    @PrimaryColumn()
    id!: string

    @Column()
    heading!: string

    @Column()
    description!:string;

    @Column()
    image!:string;    

    @Column()
    date!: Date;    

}