import * as _ from 'lodash';
import {Track} from '../models/track.model';

export class Album {

    constructor (
        public id: string = null,
        public artist: string = null,
        public title: string = null,
        public genre: string = null,
        public numberOfTracks: string = null,
        public albumCover: string = null,
        public releaseDate: string = null,
        public tracks: Track[] = null
    ) {
        this.tracks = [];
    }

    fromDto(item: any, tracks = false) {
        this.id = item.id;
        this.artist = item.artists[0].name;
        this.title = item.name;
        this.albumCover = item.images[1].url;
        this.releaseDate = item.release_date;
        if (item.hasOwnProperty('genres') && item.genres.length > 0) {
            this.genre = item[0];
        }

        if (item.hasOwnProperty('tracks')) {
            this.numberOfTracks = item.tracks.total;
        }

        if (tracks) {
            item.tracks.items.forEach(element => {
                let track = new Track();
                track.fromDto(element);
                this.tracks.push(track);
            });
        }

    }
}
