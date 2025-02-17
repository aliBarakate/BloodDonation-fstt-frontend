import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { SendComponent } from './send/send.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {ToastModule} from 'primeng/toast';


import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { MedecinComponent } from './medecin/medecin.component';



const appRoutes: Routes = [
  { path: 'inscription', component: SendComponent},
  { path: 'receveur', component: PostsComponent},
  { path: 'home', component: AppComponent},
  { path: 'login', component: LoginComponent},
  { path: 'medecin', component: MedecinComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SendComponent,
    LoginComponent,
    MedecinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    ToastModule


  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
