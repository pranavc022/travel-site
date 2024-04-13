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
  currentDate: string;
  selectedRegion: string;
  regions: Region[] = [
    { id: 'asia', name: 'Asia' },
    { id: 'amer', name: 'Americas' },
    { id: 'middle-east', name: 'Middle East' },
    { id: 'europe', name: 'Europe' }
  ];
  travelerCount: number = 1;
  constructor(private router: Router) { }


  ngOnInit(): void {
    this.currentDate = this.getCurrentDate();

  }
  getCurrentDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

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
    switch (this.selectedRegion) {
      case 'asia':
        this.router.navigate(['/destination/asia']);
        break;
      case 'amer':
        this.router.navigate(['/destination/americas']);
        break;
      case 'europe':
        this.router.navigate(['/destination/europe']);
        break;
      case 'middle-east':
        this.router.navigate(['/destination/middle-east']);
        break;
      default:
        break;
    }
  }
}
