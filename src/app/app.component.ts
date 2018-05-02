import { Component } from '@angular/core';
import {SpotifyServiceService} from './spotify-service.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent} from './navbar/navbar.component'
import { HomeComponent } from './home/home.component'
import { SearchComponent} from './search/search.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers:[ SpotifyServiceService ]

})
export class AppComponent {

  title = 'app';

  constructor(private _spotifyService:SpotifyServiceService){
      
  }

  
}
