import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourPackagesService } from '../services/tour-packages.service';
import { TourPackage } from '../model/tour-package';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent implements OnInit {
  package: TourPackage | undefined;

  constructor(
    private route: ActivatedRoute,
    private tourPackagesService: TourPackagesService
  ) {}

  ngOnInit() {
    const packageId = this.route.snapshot.paramMap.get('id');
    if (packageId) {
      this.package = this.tourPackagesService.getTourPackages('1').find(p => p.packageId === packageId);
    }
    else if (packageId) {
      this.package = this.tourPackagesService.getTourPackages('3').find(p => p.packageId === packageId);
    }
  }

  confirmBooking() {
    const email = prompt('Please enter your email for confirmation:');
    const phoneNumber = prompt('Please enter your phone number:');

    if (!email || !this.isValidEmail(email)) {
      alert('Please provide a valid email address.');
      return;
    }

    if (!phoneNumber || !this.isValidPhoneNumber(phoneNumber)) {
      alert('Phone number must be 10 digits.');
      return;
    }

    alert('Booking confirmed. Our team will get in touch with you.');
  }

  isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  isValidPhoneNumber(phoneNumber: string): boolean {
    return /^\d{10}$/.test(phoneNumber);
  }
}
