import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-booking-modal',
  templateUrl: './confirm-booking-modal.component.html',
  styleUrls: ['./confirm-booking-modal.component.css']
})
export class ConfirmBookingModalComponent {
  @Output() confirmation = new EventEmitter<{ name: string; email: string, phone: string}>();
  name: string = '';
  email: string = '';
  phone: string = '';

  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  validateName(name: string): boolean {
    const minNameLength = 2; 
    const maxNameLength = 50;
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name.trim()) && name.trim().length > 0;
  }

  validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  validatePhoneNumber(phone: string): boolean {
    return /^\d{10}$/.test(phone);
  }

  confirm() {
    if (!this.validateName(this.name)) {
      alert('Name is required and must not contain special characters.');
      return;
    }
    if (!this.validateEmail(this.email)) {
      alert('Invalid email address.');
      return;
    }
    if (!this.validatePhoneNumber(this.phone)) {
      alert('Phone number must be 10 digits.');
      return;
    }

    alert('Booking confirmed. Our team will get in touch with you.');
    this.confirmation.emit({ name: this.name, email: this.email, phone: this.phone });
  }
}