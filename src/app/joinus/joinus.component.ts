import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-joinus',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinUsComponent {
  firstName: string = '';
  lastName: string = '';
  fullName: string = '';
  email: string = '';
  institution: string = '';

  submitForm() {
    console.log('Form Data:');
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Full Name:', this.fullName);
    console.log('Email:', this.email);
    console.log('Institution:', this.institution);
  }

  updateFullName() {
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}
