import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { roles } from '../interfaces/usuario.interface';
import { UsuarioserviceService } from '../services/usuarioservice.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  roles !: roles ;
  constructor(private usuarioserviceService : UsuarioserviceService,
              private router : Router){

  }

  //valida el tipo de rol que tiene el usuario ya logueado
  canActivate(route: ActivatedRouteSnapshot):boolean{
    const expectedRole = route.data['expectedRole'];
    const token = localStorage.getItem('token');
   
    if(token!=null){
     this.roles = jwtDecode(String(token));
     if(this.roles.Rol !== expectedRole || !this.usuarioserviceService.isAuth()){
      console.log("user no autorizado");
      return false;
     }
    }
    console.log("user autorizado");
    return true;
    
  }
  
}
