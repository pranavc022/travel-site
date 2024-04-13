import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules
import { Router } from '@angular/router';
import { Region } from '../model/region';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent implements OnInit {

  ngOnInit(): void {
  }

  regions: Region[] = [
    { id: 1, name: 'Asia' },
    { id: 2, name: 'Americas' },
    { id: 3, name: 'Middle East' },
    { id: 4, name: 'Europe' }
  ];
  selectedRegion: number = 1;
  
  constructor(private router: Router) { }

  travelerCount: number = 1;
  decrementTravelerCount() {
    if (this.travelerCount > 1) {
      this.travelerCount--;
    } else {
      alert("Minimum number of travelers should be 1");
    }
  }

  incrementTravelerCount() {
    this.travelerCount++;
  }
  search() {
    this.router.navigate(['/destinations', this.selectedRegion]);
  }

  // search() {
  //   if (this.selectedRegion) {
  //     this.router.navigate([`/destinations/${this.selectedRegion}`]);
  //   }
  // }
}
