import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  todaydate;
    constructor(private myservice: MyServiceService) {
    this.todaydate = this.myservice.showTodayDate();
  }
  subscribeToNewsletter() {
    console.log('Subscribed to newsletter!');
  }
}
