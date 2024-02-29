import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefProjetComponent } from './layout/chef-projet/chef-projet.component';
import { AddParticipationComponent } from './views/add-participation/add-participation.component';
import { UpdateParticipationComponent } from './views/update-participation/update-participation.component';
import { ListParticipationComponent } from './views/list-participation/list-participation.component';

const routes: Routes = [
  { path: '', component: ChefProjetComponent, children:[
    { path: 'add-participation/:eventId', component: AddParticipationComponent },
    { path: 'update-participation/:id', component: UpdateParticipationComponent },
    { path: 'list-participation', component: ListParticipationComponent },
    

    
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefProjetRoutingModule { }
