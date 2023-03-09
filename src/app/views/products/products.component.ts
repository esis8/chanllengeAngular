import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products;

  constructor(private _productService:ProductsService) { }

   ngOnInit(): void {
    const url = 'https://codingchallenge.quartzsales.com/WS/quartz.svc/GetProducts'
    const body = {
      Cat_Id: null,
      Search: ""
     }
     const token = sessionStorage.getItem('login');

     this._productService.postData(url, body, token)
     .subscribe(
      (res)=>{this.products = res}
     ),(err)=>{console.log(err)}
  }

}
