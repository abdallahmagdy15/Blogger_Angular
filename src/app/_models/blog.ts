import { Comment } from "./comment";
import { Author } from "./author";

export class Blog {

        constructor(
                public author: Author,
                public id: string,
                public title: string,
                public body: string,
                public createdAt: Date,
                public updatedAt: Date,
                public authorName: string,
                public authorDp?: string,
                public photo?: string,
                public tags?: string[],
                public likes?: Author[],
                public comments?: Comment[]
        ) {}


        public get _Author(): Author {
                return this.author;
        }

        public set _Author(author: Author
        ) {
                this.author = author;
        }

        public get Id(): string {
                return this.id;
        }

        public set Id(id: string
        ) {
                this.id = id;
        }

        public get Title(): string {
                return this.title;
        }

        public set Title(title: string
        ) {
                this.title = title;
        }

        public get Body(): string {
                return this.body;
        }

        public set Body(body: string
        ) {
                this.body = body;
        }

        public get AuthorName(): string {
                return this.authorName;
        }

        public set AuthorName(authorName: string
        ) {
                this.authorName = authorName;
        }

        public get AuthorDp(): string|undefined {
                return this.authorDp;
        }

        public set AuthorDp(authorDp: string|undefined
        ) {
                this.authorDp = authorDp;
        }

        public get Photo(): string|undefined {
                return this.photo;
        }

        public set Photo(photo: string|undefined
        ) {
                this.photo = photo;
        }

        public get Tags(): string[]|undefined {
                return this.tags;
        }

        public set Tags(tags: string[]|undefined
        ) {
                this.tags = tags;
        }

        public get CreatedAt(): Date {
                return this.createdAt;
        }

        public set CreatedAt(createdAt: Date
        ) {
                this.createdAt = createdAt;
        }

        public get UpdatedAt(): Date {
                return this.updatedAt;
        }

        public set UpdatedAt(createdAt: Date
        ) {
                this.updatedAt = createdAt;
        }

        public get Likes(): Author[]|undefined {
                return this.likes;
        }

        public set Likes(likes: Author[]|undefined) {
                this.likes = likes;
        }
        public get Comments(): Comment[]|undefined {
                return this.comments;
        }

        public set Comments(comments: Comment[]|undefined) {
                this.comments = comments;
        }
}
