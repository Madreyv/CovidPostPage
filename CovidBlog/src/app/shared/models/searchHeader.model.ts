import { Post } from "./post.model";

export interface SearchHeaderModel{
    title:string
    searchData:boolean
    post:Post[]
    filtered:Post[]
    // value:number
}