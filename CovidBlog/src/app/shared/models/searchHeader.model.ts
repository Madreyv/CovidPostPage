import { Post } from "./post.model";

export interface SearchHeaderModel{
    title:string
    search:boolean
    post:Post[]
    filtered:Post[]
    // value:number
}