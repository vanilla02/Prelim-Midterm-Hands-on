import { Component } from '@angular/core';
import { PartnerusService } from '../partnerus.service';
import { CommonModule } from '@angular/common';

interface Partner {
  prt_company: string;
  prt_trademark: string;
  prt_sponsor: string;
  prt_website: string;
}

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  partners: Partner[] = [];

  constructor(
    private partnerusService: PartnerusService) 
    {
    this.partners = this.partnerusService.getPartners();
  }
}
