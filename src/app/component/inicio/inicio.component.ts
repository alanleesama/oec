import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgBrazilValidators, MASKS } from 'ng-brazil';
import { utilsBr, fakerBr } from 'js-brasil';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  MASKS= utilsBr.MASKS;
  public formFields;
  public formData: any = {};
  public formDataValidate: any = {};
  public inicioFormGroup;
  cnpj:string;
  
  constructor(public fb: FormBuilder, private router: Router) {
    //console.log(this.MASKS, MASKS);
  }

  ngOnInit() {
  this.init();
  }


  init() {
    this.inicioFormGroup = this.fb.group({
      cnpj: ['', [<any>Validators.required, <any>NgBrazilValidators.cnpj]]
    });
    // this.onChanges();
  }

  onSubmit(form) {
    //console.log(form.errors);
    
    this.formData = form.value;
    //console.log(form.valid);
   
    for (const c in form.controls) {
      if (!c) {
        continue;
      }
      const control = form.controls[c];
      //console.log(c, control.errors)
      this.formDataValidate[c] = control.errors;
      console.log(c);
    }
   
    if(form.valid){
      this.router.navigateByUrl('/identificacao');
    }
  }

  onSearchChange(cnpj: string): void {  
    
    let regex =/[&\/\\#,+()$~%.'":*?<>{}/_/g]/g;

    cnpj = cnpj.replace(regex,'');
    cnpj = cnpj.replace('-','');
    
    //this.formDataValidate = null;
    if(cnpj.length === 14){
      console.log(cnpj);
      //this.onSubmit(this.inicioFormGroup); 
    }
  }
  
 
/*
  onChanges(): void {
    this.inicioFormGroup.get('cnpj').valueChanges.subscribe(val => {
      //this.formattedMessage = `My name is ${val}.`;
      if(val.length === 18){
        console.log(val);
      }
    });
  }
*/
}
