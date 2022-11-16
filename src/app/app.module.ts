import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommentComponent } from './component/comment/comment.component';
import {HttpClientModule} from "@angular/common/http";
import { CommentsComponent } from './component/comments/comments.component';
import { HousesComponent } from './pages/houses/houses.component';
import { CasaComponent } from './component/house/casa.component';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { IconsComponent } from './component/icons/icons.component';
import { GalleriesComponent } from './component/galleries/galleries.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentsComponent,
    HousesComponent,
    CasaComponent,
    FavoriteComponent,
    FavoritesComponent,
    NavComponent,
    HomeComponent,
    DetailsComponent,
    IconsComponent,
    GalleriesComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
