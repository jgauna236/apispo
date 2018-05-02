import { Album } from './album';
import { Image } from './image';

export class Artist {
    name:String;
    followers: number;
    popularity: number;
    genres: string[];
    images: Image[];
    albums:Album[];


    constructor (public id:string){ }


}