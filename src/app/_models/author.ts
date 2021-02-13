import { Links } from './links';
import { Blog } from "./blog";

export class Author { 
    constructor(
        public _id: string,
        public username: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public gender: string,
        public jobTitle?: string,
        public password?: string,
        public dp?: string,
        public dob?: Date,
        public bio?: String,
        public blogs?: Blog[],
        public followers?: Author[],
        public followings?: Author[],
        public links?: Links,
        public token?: string

    ) { }
}
