import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ssdService } from 'src/app/service/ssd.service';

@Component({
  selector: 'app-ssd',
  templateUrl: './ssd.component.html',
  styleUrls: ['./ssd.component.css']
})
export class SsdComponent implements OnInit {

  allitems: any
  constructor(private router: Router, private Arouter:ActivatedRoute, private ssdService: ssdService) { }

  ngOnInit() {
    this.showitem()
  }

  showitem(){
    this.ssdService.getssd().subscribe((data)=>{
      this.allitems= data;
      console.log('Prueba ssd:', this.allitems);
    })
  }

  onSelectitem(items:any){
    console.log('Articulo seleccionado:', items)
    this.router.navigate(['SSD',items.Nombre],{ queryParams: { id: items.id } })//("queryParams muestra la data que quieres enviar en la url.")
  }

}
