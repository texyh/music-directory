
export class Track {

    constructor(
        public id: string = null,
        public number: Number = null,
        public title: string = null,
        public artist: string[] = null,
        public duration: Number = null,
        public uri: string = null
    ) {
        this.artist = [];
    }

    fromDto(item: any) {
        this.id = item.id;
        this.number = item.track_number;
        this.title = item.name;
        this.duration = item.duration_ms;
        this.uri =  `https://open.spotify.com/embed?uri=${item.uri}`;
        console.log(this.uri);
        item.artists.forEach(artist => {
            this.artist.push(artist.name);
        });

    }

}
