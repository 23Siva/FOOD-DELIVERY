export class foods {
    id!: number;
    price!: number;
    name!: string;
    favorite: boolean = false;
    star: number = 0;
    tags?: string[];
    imageurl!: string;
    cooktime!: string;
    origins!: string[];
}