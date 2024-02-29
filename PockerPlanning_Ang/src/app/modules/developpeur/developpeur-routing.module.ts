import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloppeurComponent } from './layout/developpeur/developpeur.component';
import { ListActivityComponent } from './views/list-activity/list-activity.component';
import { AddActivityComponent } from './views/add-activity/add-activity.component';
import { UpdateActivityComponent } from './views/update-activity/update-activity.component';
import { AddSupplierComponent } from './views/add-supplier/add-supplier.component';
import { UpdateSupplierComponent } from './views/update-supplier/update-supplier.component';
import { ListSupplierComponent } from './views/list-supplier/list-supplier.component';
import { ListEventComponent } from './views/list-event/list-event.component';
import { UpdateEventComponent } from './views/update-event/update-event.component';
import { AddEventComponent } from './views/add-event/add-event.component';
import { ActivityEventComponent } from './views/activity-event/activity-event.component';

const routes: Routes = [
  { path: '', component: DeveloppeurComponent, children:[
    { path: 'add-activity', component: AddActivityComponent },
    { path: 'update-activity/:id', component: UpdateActivityComponent },
    { path: 'list-activity', component: ListActivityComponent },
    { path: 'add-supplier', component: AddSupplierComponent },
    { path: 'update-supplier/:id', component: UpdateSupplierComponent },
    { path: 'list-supplier', component: ListSupplierComponent },
    { path: 'list-event', component: ListEventComponent },
    { path: 'add-event', component: AddEventComponent },
    { path: 'update-event/:id', component: UpdateEventComponent },
    { path: 'list-event/:id/activities', component: ActivityEventComponent } // Ajoutez ce chemin pour afficher les activités associées à un événement

    

    
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloppeurRoutingModule { }
