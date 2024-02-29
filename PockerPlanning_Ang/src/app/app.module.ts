import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin/admin.module';
import { ChefProjetModule } from './modules/chef-projet/chef-projet.module';
import { DeveloppeurModule } from './modules/developpeur/developpeur.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageAcceuilComponent } from './home/pageAcceuil/page-acceuil/page-acceuil.component';
 

@NgModule({
  declarations: [
    AppComponent,
    PageAcceuilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    ChefProjetModule,
    DeveloppeurModule,
    
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
