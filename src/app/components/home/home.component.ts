import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/entities/product.entity';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemLists:object;
  cartItems:Array<Product>=[];
  is_added:boolean;
  

  constructor(private _productService:ProductsService) { }


  
  ngOnInit(): void {
    this.getitemList();
  }

  getitemList(){
    this._productService.getItemList().subscribe(data=>{
      this.itemLists=data.itemList;
    });;
  }

  addToCart(item:any){
    this._productService.addtoCart(item);
  }

}
