import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChefProjetRoutingModule } from './chef-projet-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChefProjetComponent } from './layout/chef-projet/chef-projet.component';
import { ListParticipationComponent } from './views/list-participation/list-participation.component';
import { AddParticipationComponent } from './views/add-participation/add-participation.component';
import { UpdateParticipationComponent } from './views/update-participation/update-participation.component';


@NgModule({
  declarations: [
    ChefProjetComponent,
    ListParticipationComponent,
    AddParticipationComponent,
    UpdateParticipationComponent
  ],
  imports: [
    CommonModule,
    ChefProjetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ChefProjetModule { }
