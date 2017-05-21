import { Injectable } from '@angular/core';
import { Album } from '../models/album.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SpotifyService {

    ids = ['2gXTTQ713nCELgPOS0qWyt',
        '1lXY618HWkwYKJWBRYR4MK',
        '2ZQcUtW7OGSsd6LQNcYQoh',
        '3KuXEGcqLcnEYWnn3OEGy0',
        '0lw68yx3MhKflWFqCsGkIs',
        '0eFHYz8NmK75zSplL5qlfM',
        '4aawyAB9vmqN3uQ7FjRGTy',
        '382ObEPsp2rxGrnsizN5TX',
        '1A2GTWGtFfWp7KSQTwWOyo',
        '2noRn2Aes5aoNVsU6iWThc',
        '40GMAhriYJRO1rsY4YdrZb',
        '1ozpmkWcCHwsQ4QTnxOOdT'];

    private _albumUrl = `https://api.spotify.com/v1/albums?ids=${this.ids.join(',')}&market=ES`;
    private _searchUrl = 'https://api.spotify.com/v1/search?q=';


    constructor(private _http: Http) { }

    getAlbums(): Observable<Album[]> {
        console.log(this._albumUrl);
        return this._http.get(this._albumUrl)
            .catch(this.handleError)
            .map(res => {
                let data = res.json();
                data = data['albums'];
                let albums = [];
                for (let item of data) {
                    const album = new Album();
                    album.fromDto(item);
                    albums.push(album);
                }
                return albums;

            });
    }

    searchAlbums(artist: string): Observable<Album[]> {
        const searchParms  = `${artist}&type=album&market=US`;
        const url = this._searchUrl + searchParms;
        return this._http.get(url)
            .catch(this.handleError)
            .map(res => {
                let data = res.json();
                data = data['albums']['items'];
                let albums = [];
                for (let item of data) {
                    const album = new Album();
                    album.fromDto(item);
                    albums.push(album);
                }
                return albums;

            });


    }

    getAlbum(id): Observable<Album> {
        const url = `https://api.spotify.com/v1/albums/${id}?market=ES`;
        return this._http.get(url)
            .catch(this.handleError)
            .map(x => {
                let data = x.json();
                console.log(data);
                let album = new Album();
                album.fromDto(data, true);
                return album;
            });
    }

    private handleError(error: any) {
        let errorData = error.json();
        let errMsg = errorData.message || 'Internal server error';
        console.error(errorData);

        return Observable.throw(errMsg);
    }
}
