import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {SpotifyServiceService} from '../spotify-service.service';
import { Album } from '../class/album';
import { Artist } from '../class/artist';
import { ActivatedRoute , Params } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[ SpotifyServiceService ]
})
export class HomeComponent implements OnInit {
  lista: string[] = [
    "0oSGxfWSnnOXhD2fKuz2Gy",
    "22bE4uQ6baNwSHPVcDxLCe",
    "3WrFJ7ztbogyGnTHbHJFl2",
    "1dfeR4HaWDbWqFHLkxsg1d" 
  ];
  artistas: Artist[];
  album: Album[];
  albumes: Album[][];
  

  constructor(private _spotifyService:SpotifyServiceService) { }



  setArtistas(){
    this._spotifyService.getArtists(this.lista)
      .subscribe(art => {
          console.log(art.artists);
          this.artistas=art.artists;
        }
    );
      console.log(this.artistas)
            

  }

  

  ngOnInit() {
    this.setArtistas();
  }

}
