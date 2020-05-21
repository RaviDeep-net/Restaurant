import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../entities/product.entity';
// import { HeaderComponent } from '../components/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cartDataItems = new BehaviorSubject<Array<Product>>([]);
  ifItemExist=new BehaviorSubject<boolean>(false);
  cartItems:Array<Product>=[];

  cartTotalItems=new BehaviorSubject<number>(0);
  cartCount:number=0;

  constructor() { }

  addtoCart(item:Product){
    if(this.checkIfItemExists(item)==true){
       item.count++;
    }
    else{
      item.count=1;
      item.addedToCart=true;
      this.cartItems.push(item);
      this.cartCount++;
      this.cartTotalItems.next(this.cartCount);//For increasing in cart number
    }
    this.cartDataItems.next(this.cartItems);
  }

  removeFromCart(cart:Product){
    if(cart.count>1){
      cart.count= cart.count-1;
      console.log(cart.count);
    }
    else{
      cart.addedToCart=false;
      this.cartItems.pop();
      this.cartCount--;
      this.cartTotalItems.next(this.cartCount);//For decreasing in cart number
    }
    this.ifItemExist.next(false);
  }

   checkIfItemExists(item:Product):boolean{
     let returnType:boolean;
     let cartItems=this.cartDataItems.getValue();
     if(cartItems.length>0){
        
        cartItems.some(element => {
        if(item.id==element.id){
          returnType=true;
        }
        else{
          returnType= false;
        }
        });
        return returnType;
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
