import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PackagesComponent } from './destination/packages/packages.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'destinations', component: DestinationComponent},
  {path: 'destinations/packages/:id/:adventure', component: PackagesComponent},
  {path: 'about-us', component: AboutUsComponent },
  {path: 'contact', component: ContactComponent},
  { path: '1', children: [{ path: 'destinations', component: DestinationComponent }] },
  { path: '2', children: [{ path: 'destinations', component: DestinationComponent }] },
  { path: '3', children: [{ path: 'destinations', component: DestinationComponent }] },
  { path: '4', children: [{ path: 'destinations', component: DestinationComponent }] },
  // {path: '', redirectTo: '', },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
