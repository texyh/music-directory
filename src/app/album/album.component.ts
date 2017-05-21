import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Album} from '../models/album.model';
import {SpotifyService} from '../services/spotify.service';

@Component({
    selector: 'app-album',
    templateUrl : './album.component.html'
})
export class AlbumComponent implements OnInit{
    album: Album;
    albumId: string;

    constructor(
        private service: SpotifyService,
        private _router: ActivatedRoute
        ) {}


    ngOnInit() {
        this.albumId = this._router.snapshot.params['id'];
        this.service.getAlbum(this.albumId).subscribe(x => this.album = x);
    }


}
