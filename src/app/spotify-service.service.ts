import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Artist } from './class/artist';

@Injectable()
export class SpotifyServiceService {
  private artistas: Artist[];

  private searchUrl: string;
  private artistUrl: string;
  private token: string="BQAdToBOjniJrfXpb_utJGi6D9woU0wV8WBrQgb3bQ1aH8A6vldlO2q0w-XnzT6jbKE5XwKpOXZv5NXoAaZbs2hBUAPJIujoXvqrNvul-XySj1jVV5-kaC4AiXRymGt5bWFII0AQKJ7GdY1Y";
  constructor(private _http:Http) { }


  searchMusic(str:string, type='artist'){
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    let headers = new Headers();
        headers.append('Authorization' , 'Bearer ' + this.token);
    return this._http.get(this.searchUrl, {headers : headers})
        .map(res => res.json());
        
  }

getArtists(str: string[]){
  var i;
  this.artistUrl = 'https://api.spotify.com/v1/artists?ids=';
  for(i=0; i<str.length ; i++){
    this.artistUrl=this.artistUrl+str[i] + ',';
  }
  
  this.artistUrl=this.artistUrl.slice(0,-1);
  let headers = new Headers();
  headers.append('Authorization' , 'Bearer ' + this.token);

  return this._http.get(this.artistUrl , {headers : headers})
  .map((res :Response ) => res.json());
}




}
