export class Blogs {
    constructor(
                public _id:string,
               // public author:string,
                public title:string,
                public body:string,
                public authorName:string,
                public authorDp:string,
                public photo:string,
                public tags:string[],
                public createdAt:Date,
                public likesCount:number,
                //comment
        ){}
}
