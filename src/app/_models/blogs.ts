import { Comment } from "./comment";
import { User } from "./user";

export class Blogs {
    constructor(
                public author?:User,
                public _id?:string,
                public title?:string,
                public body?:string,
                public authorName?:string,
                public authorDp?:string,
                public photo?:string,
                public tags?:string[],
                public createdAt?:Date,
                public likesCount?:number,
                public comments?:Comment[]
               
        ){}
}
