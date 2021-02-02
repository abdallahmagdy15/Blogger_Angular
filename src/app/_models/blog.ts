import { Comment } from "./comment";
import { Author } from "./author";

export class Blog {

        constructor(
                private author: Author,
                private id: string,
                private title: string,
                private body: string,
                private authorName: string,
                private authorDp: string,
                private photo: string,
                private tags: string[],
                private createdAt: Date,
                private likesCount: number,
                private comments: Comment[]
        ) { }


        public get Author(): Author {
                return this.author;
        }

        public set Author(author: Author
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

        public get AuthorDp(): string {
                return this.authorDp;
        }

        public set AuthorDp(authorDp: string
        ) {
                this.authorDp = authorDp;
        }

        public get Photo(): string {
                return this.photo;
        }

        public set Photo(photo: string
        ) {
                this.photo = photo;
        }

        public get Tags(): string[] {
                return this.tags;
        }

        public set Tags(tags: string[]
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

        public get LikesCount(): number {
                return this.likesCount;
        }

        public set LikesCount(likesCount: number
        ) {
                this.likesCount = likesCount;
        }

        public get Comments(): Comment[] {
                return this.comments;
        }

        public set Comments(comments: Comment[]) {
                this.comments = comments;
        }
}
