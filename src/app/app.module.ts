import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { Routes, RouterModule } from '@angular/router'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FiveComponent } from './five/five.component';




const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'third-component', component: ThirdComponent },
  { path: 'fourth-component', component: FourthComponent },
  { path: 'five-component', component: FiveComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    ThirdComponent,
    FourthComponent,
    FiveComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,RouterModule.forRoot(routes)
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],

  exports: [RouterModule]
})
export class AppModule { }
