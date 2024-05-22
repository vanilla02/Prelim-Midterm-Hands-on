import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from './about/about.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PartnersComponent } from './partners/partners.component';
import { JoinUsComponent } from './joinus/joinus.component';

// asterisk for pagenotfound 

export const routes: Routes = [
    {"path":'', "title":"Home", component:MainpageComponent},
    {"path":'about', "title":"About Us", component:AboutComponent},
    {"path":'partners', "title":"Our Partners", component:PartnersComponent},
    {"path":'joinus', "title":"Join Us", component:JoinUsComponent},
    {"path":'**', "title":"Page Not Found", component:PagenotfoundComponent}
];