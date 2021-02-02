import { Blog } from "./blog";

export class Author {
    constructor(
        private id:string,
        private userName: string,
        private password: string,
        private firstName: string,
        private lastName: string,
        private diplayPicture: string,
        private email: string,
        private dob: Date,
        private bio: String,
        private blogs: Blog[],
        private followers: Author[],
        private followings: Author[]
    ) { }

    public get Id(): string {
        return this.id;
    }

    public set Id(id: string
    ) {
        this.id = id;
    }

    public get UserName(): string {
        return this.userName;
    }

    public set UserName(userName: string
    ) {
        this.userName = userName;
    }

    public get Password(): string {
        return this.password;
    }

    public set Password(password: string
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

    public get DiplayPicture(): string {
        return this.diplayPicture;
    }

    public set DiplayPicture(diplayPicture: string
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

    public get Dob(): Date {
        return this.dob;
    }

    public set Dob(dob: Date
    ) {
        this.dob = dob;
    }

    public get Bio(): String {
        return this.bio;
    }

    public set Bio(bio: String
    ) {
        this.bio = bio;
    }

    public get Blogs(): Blog[] {
        return this.blogs;
    }

    public set Blogs(blogs: Blog[]
    ) {
        this.blogs = blogs;
    }

    public get Followers(): Author[] {
        return this.followers;
    }

    public set Followers(followers: Author[]
    ) {
        this.followers = followers;
    }

    public get Followings(): Author[] {
        return this.followings;
    }

    public set Followings(followings: Author[]) {
        this.followings = followings;
    }

}
