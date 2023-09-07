import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { SetPersona } from 'src/app/interfaces/persona.interface';
import { CreUsuarioInterface, jwt, login, loginI } from 'src/app/interfaces/usuario.interface';
import { PersonaserviceService } from '../../services/personaservice.service';
import { UsuarioserviceService } from '../../services/usuarioservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: CreUsuarioInterface = new CreUsuarioInterface;
  persona:  SetPersona = new SetPersona;
  login: login = new login;
  loginI!: jwt;
  log!:String;
  crep!:String;
  creu!:String;
  errorMessage!:String
  
  constructor(private usuarioserviceService : UsuarioserviceService,
              private personaserviceService: PersonaserviceService,
              private router : Router
              ) {
                this.errorMessage="";
               }

  ngOnInit(): void {
    this.log = "ñ";
    this.crep = "";
    this.creu = "";
    this.login.user="";
    this.login.password="";
  }

  // activa y desactiva formularios
  crear(){
    this.log = "";
    this.crep = "s";
    this.usuario.password="";
    this.usuario.user="";
    this.persona.tipodoc="";
  }
  //  activa y desactiva formularios
  loginom(){
    this.log = "f";
    this.crep = "";
  }

  // metodo para el login de la aplicacion
  loginOn(){
    this.usuarioserviceService.getLogin(this.login)
        .subscribe( data =>{ 
          const arreglo = Object.values(data);
          arreglo[0];
          this.loginI=arreglo[0];
          console.log(this.loginI.chars); if(this.loginI.chars ){
            localStorage.setItem('token',this.loginI.chars);
            if(localStorage.getItem('token')) {
              this.router.navigate(['/home']);
              console.log(localStorage.getItem('token'));
            }
          }
        },err =>this.errorMessages(err),
        );
  }

// se crea la persona con sun usuario, el backend trae las exepciones
  createCount(){
    this.usuario.persona = this.persona;
    console.log(this.usuario);
    this.personaserviceService.createPersona(this.usuario)
    .subscribe( data =>{
      if(data){
        console.log("persona creada");
        console.log(data.id);
        this.usuario=data;
        alert("El usuario "+this.usuario.user+" fue creado");
        this.ngOnInit();
    }},err => {
      this.errorMessages(err);     
    })
   }

// Aquí se emitirá el alerta con el mensaje que `throwError` devuelva el service.
  errorMessages(err:String){
      alert(err);
      this.ngOnInit();
  }
}