import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsuarioserviceService } from '../services/usuarioservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private usuarioserviceService : UsuarioserviceService,
              private router : Router){

  }
  //valida la autentificación
  canActivate():boolean{
    if(this.usuarioserviceService.isAuth() == true){
      console.log("si tiene acceso");
      return true;
    }
    console.log("no tiene acceso");
      this.router.navigate(['/login']);
      return false;
  }
  
}
