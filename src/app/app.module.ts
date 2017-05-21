import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {SpotifyService} from './services/spotify.service';

import { AppComponent } from './home/app.component';
import { AlbumComponent} from './album/album.component';
import { AlbumListComponent} from './albumList/albumlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    AlbumListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
            { path: '', redirectTo: 'albums', pathMatch: 'full' },
            { path: 'albums', component: AlbumListComponent },
            { path: 'album/:id', component: AlbumComponent},
            { path: 'album', component: AlbumComponent},
            { path: '**', redirectTo: 'albums' },
        ])
  ],
  providers: [SpotifyService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
