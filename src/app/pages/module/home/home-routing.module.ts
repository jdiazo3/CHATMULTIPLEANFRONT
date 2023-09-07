import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RoleGuard } from 'src/app/guards/role.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent,canActivate:[AuthGuard] },
{ path: 'home', loadChildren: () => import('../../../pages/module/home/home.module').then(m => m.HomeModule),canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
