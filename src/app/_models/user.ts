import { Blogs } from "./blogs";

export class User {
    constructor(
                public userName?:string,
                public password?:string,
                public firstName?:string,
                public lastName?:string,
                public DiplayPicture?:string,
                public email?:string,
                public dob?:Date,
                public blogs?:Blogs[],
                public followers?:User[],
                public followings?:User[]
                ){}
}
