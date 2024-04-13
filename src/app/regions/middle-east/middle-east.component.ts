import { Component } from '@angular/core';
import { TourPackagesService } from '../../services/tour-packages.service';
import { TourPackage } from '../../model/tour-package';

@Component({
  selector: 'app-middle-east',
  templateUrl: './middle-east.component.html',
  styleUrl: './middle-east.component.css'
})
export class MiddleEastComponent {
  tourPackages: TourPackage[] = [];
  adventureTypes = ['Hill Stations', 'Desert Safari', 'Water Sports', 'Historical', 'Wonders'];
  selectedAdventureType: string;
  costPerPersonRange: [number, number] = [1500, 3000];

  constructor(private tourPackagesService: TourPackagesService) {}

  ngOnInit() {
    this.fetchTourPackages();
  }

  fetchTourPackages() {
    this.tourPackages = this.tourPackagesService.getTourPackages('3', this.costPerPersonRange);
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
