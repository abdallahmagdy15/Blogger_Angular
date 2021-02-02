import { User } from "./user";

export class Comment {
    constructor(
                public user?:User,
                public userDp?:string,
                public userName?:string,
                public body?:string,
                public photo?:string,
                public likesCount?:number,      
        ){}
}
