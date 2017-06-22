import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms' //NgModule lives here
import { HttpModule }           from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading and configuring the in-memory web API
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService } 			    from './hero.service';
import { DashboardComponent }   from './dashboard.component';
import { HeroSearchComponent }   from './hero-search.component';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule, // import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [ 
  	AppComponent,
  	HeroDetailComponent,
  	HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ HeroService ]
})
export class AppModule { }
