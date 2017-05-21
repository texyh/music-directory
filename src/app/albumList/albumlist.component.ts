import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../services/spotify.service';
import { Album } from '../models/album.model';

@Component({
    selector: 'app-albumlist',
    templateUrl: './albumlist.component.html'
})
export class AlbumListComponent implements OnInit {
 albums: Album[];
  searchParam: string;
  tableView = false;
  constructor(private service: SpotifyService){}

  onSubmit() {
    if (this.searchParam) {
      this.service.searchAlbums(this.searchParam)
                .subscribe(x => {
                  this.tableView = true;
                  this.albums = x;
                });
    }
  }

  showAlbum() {
    console.log('album');
  }


  ngOnInit() {
    this.service.getAlbums().subscribe(
      x => {
        this.albums = x;
      }
    );
  }
}
