import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PackagesComponent } from './destination/packages/packages.component';
import { AsiaComponent } from './regions/asia/asia.component';
import { AmericasComponent } from './regions/americas/americas.component';
import { EuropeComponent } from './regions/europe/europe.component';
import { MiddleEastComponent } from './regions/middle-east/middle-east.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'destinations', component: DestinationComponent},
  { path: 'destinations/:regionId', component: DestinationComponent },

  { path: 'destinations/asia', component: AsiaComponent },
  { path: 'destinations/amer', component: AmericasComponent },
  { path: 'destinations/europe', component: EuropeComponent },
  { path: 'destinations/middle-east', component: MiddleEastComponent },

  {path: 'destinations/:regionId/packages', component: PackagesComponent},
  {path: 'about-us', component: AboutUsComponent },
  {path: 'contact', component: ContactComponent},

  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
