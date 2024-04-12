import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DestinationComponent } from './destination/destination.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PackagesComponent } from './destination/packages/packages.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import {MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CountryCarouselComponent } from './country-carousel/country-carousel.component';
import { FormsModule } from '@angular/forms';
import { OfferingsComponent } from './offerings/offerings.component';
import { CardComponent } from './offerings/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DestinationComponent,
    AboutUsComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    PackagesComponent,
    FooterComponent,
    SearchComponent,
    CountryCarouselComponent,
    OfferingsComponent,
    CardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,  
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
