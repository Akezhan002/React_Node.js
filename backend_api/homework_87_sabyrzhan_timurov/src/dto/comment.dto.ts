import { nanoid } from "@reduxjs/toolkit";
import { Expose } from "class-transformer";


export class CommentDto {
    id: string = nanoid(7)
    

    @Expose()
    idNews!:string;

    @Expose()
    author?:string;

    @Expose()
    comment!:string;     
}
