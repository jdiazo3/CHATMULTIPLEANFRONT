import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {path: 'home', loadChildren: () => import('./pages/module/home/home.module').then(m => m.HomeModule),canActivate:[AuthGuard]},
  {path: 'archivos', loadChildren: () => import('./pages/module/archivos/archivos.module').then(m => m.ArchivosModule),canActivate:[AuthGuard]},
  {path: 'biblio', loadChildren: () => import('./pages/module/biblio/biblio.module').then(m => m.BiblioModule),canActivate:[AuthGuard]},
  { path: '**',pathMatch: 'full',redirectTo:'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
