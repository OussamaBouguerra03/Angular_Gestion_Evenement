import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { ListChefprojetComponent } from './views/list-chefprojet/list-chefprojet.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children:[
    { path: 'list-chefprojet', component: ListChefprojetComponent }

    
  ] }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
