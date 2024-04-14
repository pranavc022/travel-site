import { Component, OnInit } from '@angular/core';
import { TourPackagesService } from '../../services/tour-packages.service';
import { TourPackage } from '../../model/tour-package';
@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrl: './europe.component.css'
})
export class EuropeComponent implements OnInit {
  tourPackages: TourPackage[] = [];
  adventureTypes = ['Hill Stations', 'Desert Safari', 'Water Sports', 'Historical', 'Wonders'];
  selectedAdventureType: string;
  costPerPersonRange: [number, number] = [1500, 3000];

  constructor(private tourPackagesService: TourPackagesService) {}

  ngOnInit() {
    this.fetchTourPackages();
  }

  fetchTourPackages() {
    this.tourPackages = this.tourPackagesService.getTourPackages('4', this.costPerPersonRange);
  }

  onAdventureTypeSelect() {
    this.fetchTourPackages();
  }

  onCostRangeChange() {
    this.fetchTourPackages();
  }
  clearFilters() {
    this.selectedAdventureType = '';
    this.costPerPersonRange = [1500, 3000];
    this.fetchTourPackages();
  }


}
