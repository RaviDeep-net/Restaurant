import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _productService:ProductsService) { }

  cartItemCount:number;
  

  ngOnInit(): void {
     this._productService.cartTotalItems.subscribe(data=>{
      console.log(data);
      this.cartItemCount= data;
     });
  }
  
  getCartCount(){
    
  }
}
