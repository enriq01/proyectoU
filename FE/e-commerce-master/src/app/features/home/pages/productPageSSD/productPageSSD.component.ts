import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ssdService } from 'src/app/service/ssd.service';

@Component({
  selector: 'app-productPageSSD',
  templateUrl: './productPageSSD.component.html',
  styleUrls: ['./productPageSSD.component.css']
})
export class ProductPageSSDComponent implements OnInit {
  productId: any;
  item: any;

  constructor(private router: Router, private Arouter: ActivatedRoute, private ssdService: ssdService) { }

  ngOnInit() {
    // Acceder al estado pasado durante la navegación
    this.Arouter.queryParams.subscribe( params => {
      this.productId = params['id']
      console.log(this.productId)
    });
    this.getProduct()
  }

  getProduct(){
    this.ssdService.getssdById(this.productId).subscribe((data)=>{
      this.item = data;
      console.log('Data del producto', this.item)
    })
  }

}
