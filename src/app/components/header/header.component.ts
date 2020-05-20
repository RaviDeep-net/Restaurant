import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  cartItemCount:number;
  cartTotalItems=new BehaviorSubject<number>(0);

  ngOnInit(): void {
     this.getCartCount();
  }
  
  getCartCount(){
    this.cartItemCount= this.cartTotalItems.getValue();
  }
}
