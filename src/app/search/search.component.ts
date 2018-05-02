import { Component, OnInit } from '@angular/core';
import {SpotifyServiceService} from '../spotify-service.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Album } from '../class/album';
import { Artist } from '../class/artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers:[ SpotifyServiceService ]
})
export class SearchComponent implements OnInit {
  searchStr:string;
  searchResultado: Artist[];
 
  
  constructor(private _spotifyService:SpotifyServiceService){
      
  }
  
  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr)
        .subscribe(res => {
            this.searchResultado = res.artists.items;
            console.log(this.searchResultado);
        })
}

  ngOnInit() {
  }

}
