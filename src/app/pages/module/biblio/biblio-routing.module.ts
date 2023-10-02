import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RoleGuard } from 'src/app/guards/role.guard';
import { BiblioComponent } from './biblio.component';

const routes: Routes = [{ path: '', component: BiblioComponent,canActivate:[AuthGuard] },
{ path: 'biblio', loadChildren: () => import('../../../pages/module/biblio/biblio.module').then(m => m.BiblioModule),canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiblioRoutingModule { }
