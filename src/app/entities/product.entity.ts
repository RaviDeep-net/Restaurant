export class Product{
    id:number;
    name:string;
    price:number;
    photo:string;
    count ?:number;
    addedToCart?:boolean;
    // cartItemCount?:number;
}