import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RoleGuard } from 'src/app/guards/role.guard';
import { ArchivosComponent } from './archivos.component';

const routes: Routes = [{ path: '', component: ArchivosComponent,canActivate:[AuthGuard] },
{ path: 'archivos', loadChildren: () => import('../../../pages/module/archivos/archivos.module').then(m => m.ArchivosModule),canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchivosRoutingModule { }
