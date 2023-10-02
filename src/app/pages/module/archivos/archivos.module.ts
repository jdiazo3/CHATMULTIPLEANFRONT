import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivosRoutingModule } from './archivos-routing.module';
import { ArchivosComponent } from './archivos.component';
import { FormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ArchivosComponent
  ],
  imports: [
    CommonModule,
    ArchivosRoutingModule,
    FormsModule,
    ComponentsModule,
  ], providers: [
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
})
export class ArchivosModule { }
