import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiblioRoutingModule } from './biblio-routing.module';
import { BiblioComponent } from './biblio.component';
import { FormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    BiblioComponent
  ],
  imports: [
    CommonModule,
    BiblioRoutingModule,
    FormsModule,
    ComponentsModule,
  ], providers: [
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
})
export class BiblioModule { }
