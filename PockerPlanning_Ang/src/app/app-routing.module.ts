import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAcceuilComponent } from './home/pageAcceuil/page-acceuil/page-acceuil.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:PageAcceuilComponent},
  { path: 'admin', loadChildren:()=>import('./modules/admin/admin.module').then(x => x.AdminModule) },
  { path: 'chefProjet', loadChildren:()=>import('./modules/chef-projet/chef-projet.module').then(x => x.ChefProjetModule) },
  { path: 'developpeur', loadChildren:()=>import('./modules/developpeur/developpeur.module').then(x => x.DeveloppeurModule) },
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
