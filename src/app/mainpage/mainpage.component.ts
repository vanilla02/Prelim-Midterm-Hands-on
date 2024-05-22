import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  constructor(private router: Router) { }

  redirectToProductComponent() {
    this.router.navigate(['/product']); 
  }

  redirectToAboutComponent() {
    this.router.navigate(['/about']); 
  }
  conferences = [
    {
      id: 1,
      name: 'Global Tech Summit',
      date: 'August 15-17, 2024',
      location: 'Virtual Conference',
      description: 'Join us for the largest gathering of tech enthusiasts from around the globe. Explore the latest trends in technology, attend insightful sessions, and network with industry leaders.',
      image: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_178098899_81139.jpg',
    },
    {
      id: 2,
      name: 'World Business Forum',
      date: 'September 20-22, 2024',
      location: 'New York, USA',
      description: 'Experience three days of inspiration, learning, and networking with the world\'s most influential business leaders. Gain insights into the future of business and innovation.',
      image: 'https://media.istockphoto.com/photos/young-confident-successful-business-people-discuss-and-analyze-work-picture-id1313264835?k=20&m=1313264835&s=612x612&w=0&h=L55FyMCGTU2bHwHavfTa2tqZGwp9XqTK5tt5cy7bH4o=',
    },
    {
      id: 3,
      name: 'Global Health Summit',
      date: 'October 10-12, 2024',
      location: 'Geneva, Switzerland',
      description: 'Join global health experts, policymakers, and advocates for discussions on pressing health issues facing our world today. Collaborate on solutions to improve global health outcomes.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzT11_RyJyBZWX6nMiUlUs_DbSLEhNAehYWOR74U-dJw&s',
    },
  ];

  redirectToConferenceDetails(id: number) {
    this.router.navigate(['/conference', id]); 
  }
}
