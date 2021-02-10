import { Author } from "./author";

export class Comment {

        constructor(
                public user: Author,
                public userName: string,
                public body: string,
                public userDp?: string,
                public photo?: string,
                public likes?: Author[],
        ) { }

        public get User(): Author {
                return this.user;
        }

        public set User(user: Author
        ) {
                this.user = user;
        }

        public get UserDp(): string|undefined {
                return this.userDp;
        }

        public set UserDp(userDp: string|undefined
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

        public get Photo(): string|undefined {
                return this.photo;
        }

        public set Photo(photo: string|undefined
        ) {
                this.photo = photo;
        }

        public get LikesCount(): Author[]|undefined {
                return this.likes;
        }

        public set LikesCount(likesCount: Author[]|undefined) {
                this.likes = likesCount;
        }
        
}
