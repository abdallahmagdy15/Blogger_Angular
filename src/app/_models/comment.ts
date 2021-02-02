import { Author } from "./author";

export class Comment {

        constructor(
                private user: Author,
                private userDp: string,
                private userName: string,
                private body: string,
                private photo: string,
                private likesCount: number,
        ) { }

        public get User(): Author {
                return this.user;
        }

        public set User(user: Author
        ) {
                this.user = user;
        }

        public get UserDp(): string {
                return this.userDp;
        }

        public set UserDp(userDp: string
        ) {
                this.userDp = userDp;
        }

        public get UserName(): string {
                return this.userName;
        }

        public set UserName(userName: string
        ) {
                this.userName = userName;
        }

        public get Body(): string {
                return this.body;
        }

        public set Body(body: string
        ) {
                this.body = body;
        }

        public get Photo(): string {
                return this.photo;
        }

        public set Photo(photo: string
        ) {
                this.photo = photo;
        }

        public get LikesCount(): number {
                return this.likesCount;
        }

        public set LikesCount(likesCount: number) {
                this.likesCount = likesCount;
        }
}
