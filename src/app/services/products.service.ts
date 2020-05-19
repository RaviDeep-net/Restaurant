import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cartDataItems = new BehaviorSubject<Array<Product>>([]);
  cartItems:Array<Product>=[];
  constructor() { }

  addtoCart(item:Product){
    console.log(this.checkIfItemExists(item));
    if(this.checkIfItemExists(item)==true){
       item.count++;
       console.log(item.count);
       console.log('Item exits');
    }
    else{
      item.count=1;
      console.log('Item not exits');
      this.cartItems.push(item);
    }
    this.cartDataItems.next(this.cartItems);
    console.log(this.cartItems);
  }

  removeFromCart(cart:Product){
    if(cart.count>1){
      cart.count= cart.count-1;
      console.log(cart.count);
    }
    else{
      this.cartItems.pop();
    }
    //  console.log(cart);
    //this.cartDataItems.next(this.cartItems);
  }

   checkIfItemExists(item:Product):boolean{
     let returnType:boolean;
      if(this.cartItems.length>0){
        
        this.cartItems.some(element => {
        if(item.id==element.id){
          returnType=true;
        }
        else{
          returnType= false;
        }
        });
        return  returnType;
      }
     else{
      return false;
     }
     
     
  }

  checkRiskValues(): boolean {
    return true
  }

  getItemList(){
    return Observable.create(observer => {
      setTimeout(() => {
        let response = {success: true, message: '', itemList: [{
          id : '5eb285227bcd49300c80a00b',
          name: 'Pulao',
          price:10,
          photo:'https://thumbs.dreamstime.com/b/shai-pulao-vegetable-indian-biryani-31520269.jpg'
        },
        {
          id : '5eb285227bcd49300c80a12b',
          name: 'Panner',
          price:110,
          photo:'https://www.kalnirnay.com/wp-content/uploads/2017/03/paneer-tikka-1.jpg'
        },
        {
          id : '5eb285227bcd49300c80a13b',
          name: 'Chicken Masala',
          price:210,
          photo:'https://yummyindiankitchen.com/wp-content/uploads/2017/08/chicken-masala-spicy-gravy-recipe-indian-restaurant-style.jpg'
        },
        {
          id : '5eb285227bcd49300c80a14b',
          name: 'Chicken Afghani',
          price:510,
          photo:'https://assets.kraftfoods.com/recipe_images/opendeploy/173356_640x428.jpg'
        },
        {
          id : '5eb285227bcd49300c80a15b',
          name: 'Chicken Tikka',
          price:765,
          photo:'https://i.ytimg.com/vi/NeQxq3UGhLc/maxresdefault.jpg'
        }
        ]};
        observer.next(response);
        observer.complete();
      }, 200);
    });
  }
}
