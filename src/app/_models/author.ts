import { Links } from './links';
import { Blog } from "./blog";

export class Author {
    constructor(
        public id: string,
        public username: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public jobTitle?: string,
        public password?: string,
        public diplayPicture?: string,
        public dob?: Date,
        public bio?: String,
        public blogs?: Blog[],
        public followers?: Author[],
        public followings?: Author[],
        public links?: Links,
        public token?: string

    ) { }


    public get Id(): string {
        return this.id;
    }

    public set Id(id: string
    ) {
        this.id = id;
    }

    public get Username(): string {
        return this.username;
    }

    public set Username(userName: string
    ) {
        this.username = userName;
    }

    public get Password(): string | undefined {
        return this.password;
    }

    public set Password(password: string | undefined
    ) {
        this.password = password;
    }

    public get FirstName(): string {
        return this.firstName;
    }

    public set FirstName(firstName: string
    ) {
        this.firstName = firstName;
    }

    public get LastName(): string {
        return this.lastName;
    }

    public set LastName(lastName: string
    ) {
        this.lastName = lastName;
    }

    public get DiplayPicture(): string | undefined {
        return this.diplayPicture;
    }

    public set DiplayPicture(diplayPicture: string | undefined
    ) {
        this.diplayPicture = diplayPicture;
    }

    public get Email(): string {
        return this.email;
    }

    public set Email(email: string
    ) {
        this.email = email;
    }

    public get Dob(): Date | undefined {
        return this.dob;
    }

    public set Dob(dob: Date | undefined
    ) {
        this.dob = dob;
    }

    public get Bio(): String | undefined {
        return this.bio;
    }

    public set Bio(bio: String | undefined
    ) {
        this.bio = bio;
    }

    public get Blogs(): Blog[] | undefined {
        return this.blogs;
    }

    public set Blogs(blogs: Blog[] | undefined
    ) {
        this.blogs = blogs;
    }

    public get Followers(): Author[] | undefined {
        return this.followers;
    }

    public set Followers(followers: Author[] | undefined
    ) {
        this.followers = followers;
    }

    public get Followings(): Author[] | undefined {
        return this.followings;
    }

    public set Followings(followings: Author[] | undefined) {
        this.followings = followings;
    }
    public get JobTitle(): string | undefined {
        return this.jobTitle;
    }

    public set JobTitle(jt:string | undefined) {
        this.jobTitle = jt;
    }
    public get Links(): Links | undefined {
        return this.links;
    }

    public set Links(lnks: Links | undefined) {
        this.links = lnks;
    }

    public get Token(): string | undefined {
        return this.token;
    }
    public set Token(value: string | undefined) {
        this.token = value;
    }

}
