import { Component, OnInit } from '@angular/core';
import { Route,ActivatedRoute, Router } from '@angular/router';
import { storreService } from 'src/app/service/storre.service';

@Component({
  selector: 'app-ProductPageTorre',
  templateUrl: './ProductPageTorre.component.html',
  styleUrls: ['./ProductPageTorre.component.css']
})
export class ProductPageTorreComponent implements OnInit {
  productId: any;
  item: any;

  constructor(private router: Router, private Arouter: ActivatedRoute, private storreService: storreService) { }

  ngOnInit() {
     // Acceder al estado pasado durante la navegación
  this.Arouter.queryParams.subscribe( params => {
    this.productId = params['id']
    console.log(this.productId)
  });
    this.getProduct()
  }

  getProduct(){
    this.storreService.getstorreById(this.productId).subscribe((data)=>{
      this.item = data;
      console.log(this.item)
    })
  }

}
