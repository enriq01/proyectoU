import { Component, OnInit } from '@angular/core';
import { Route,ActivatedRoute, Router } from '@angular/router';
import { storreService } from 'src/app/service/storre.service';

@Component({
  selector: 'app-torre',
  templateUrl: './torre.component.html',
  styleUrls: ['./torre.component.css']
})
export class TorreComponent implements OnInit {

  allitems:any
  constructor(private router: Router, private Arouter:ActivatedRoute, private storreServise:storreService) { }

  ngOnInit() {
    this.showiten()
  }

  showiten(){
    this.storreServise.getstorre().subscribe((data)=>{
      this.allitems = data;
      console.log('Prueba Torre:',this.allitems);
    })
  }

  onSelectitem(items:any){
    console.log('Articulo seleccionado:', items)
    this.router.navigate(['Torre',items.Nombre],{ queryParams: { id: items.id } })//("queryParams muestra la data que quieres enviar en la url.")
  }

}
