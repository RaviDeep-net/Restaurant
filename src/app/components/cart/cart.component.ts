import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/entities/product.entity';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  isCartEmpty:boolean=true;
  cartItems:Product [];
  itemCount:number=1;
  constructor(private _productService:ProductsService) { }
  
  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(){
    this._productService.cartDataItems.subscribe(data=>{
      this.cartItems=data
      if(data.length>0){
          this.isCartEmpty=false;
      }
    });
  }

  addToCart(item:Product){
    // console.log(item);
    this._productService.addtoCart(item);
  }

  removeFromCart(cart:Product){
    this._productService.removeFromCart(cart);
  }

  getCartTotal(){
    let totalPrice = 0;
    this._productService.cartDataItems.subscribe(items => {
    items.map(item => {
      totalPrice += item.price * item.count;
    });
  });
  return totalPrice;
  }

}
