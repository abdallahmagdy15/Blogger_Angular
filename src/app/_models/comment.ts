import { Author } from "./author";

export class Comment {

        constructor(
                public _id:string,
                public author: Author,
                public authorName: string,
                public body: string,
                public createdAt:Date,
                public updatedAt:Date,
                public authorDp?: string,
                public photo?: string,
                public likes?: string[],
        ) { }        
}
