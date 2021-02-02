import { Author } from "./author";

export class Comment {
    constructor(
                public user?:Author,
                public userDp?:string,
                public userName?:string,
                public body?:string,
                public photo?:string,
                public likesCount?:number,      
        ){}
}
