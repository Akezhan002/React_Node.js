import { IComment } from "@/interfaces/IComment.inteface";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Comment implements IComment {

    @PrimaryColumn()
    id!: string

    @Column()
    idNews!: string

    @Column()
    author!:string;

    @Column()
    comment!:string;    
}