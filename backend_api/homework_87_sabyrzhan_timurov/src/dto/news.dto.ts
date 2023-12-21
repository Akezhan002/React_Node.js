import { nanoid } from "@reduxjs/toolkit";
import { Expose } from "class-transformer";


export class NewsDto {
    id: string = nanoid(7)
    

    @Expose()
    heading!:string;

    @Expose()
    discription?:string;

    @Expose()
    image!:string;    

    @Expose()
    date: Date = new Date()   
}
