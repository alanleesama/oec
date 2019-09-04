import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  model: any = {};
  cnpj: any;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    alert(this.cnpj);
  }
}
