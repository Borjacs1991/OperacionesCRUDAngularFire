import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CookieService } from 'ngx-cookie-service';

import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

import { ContactoService } from './contacto/contacto.services';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'blogs',
    component: BlogComponent,
    data: { title: 'Blog' }
  },
  {
    path: 'servicios',
    component: ServiciosComponent,
    data: { title: 'Servicios' }
  },
  {
    path: 'contactos',
    component: ContactoComponent,
    data: { title: 'Contacto' }
  },
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**',
  component: ErrorComponent,
  data: { title: 'Error' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ServiciosComponent,
    ContactoComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
  ],
  providers: [  CookieService, ContactoService ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule implements OnInit { 

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
  constructor(private contactoService: ContactoService){
  }

}
