import { Comment } from "./comment";
import { Author } from "./author";

export class Blog {

        constructor(
                public author: Author,
                public _id: string,
                public title: string,
                public body: string,
                public createdAt: Date,
                public updatedAt: Date,
                public authorName: string,
                public authorDp?: string,
                public photo?: string,
                public tags?: string[],
                public likes?: string[],
                public comments?: Comment[]
        ) {}
}
