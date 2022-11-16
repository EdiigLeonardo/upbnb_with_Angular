import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HousesComponent} from "./pages/houses/houses.component";
import {FavoritesComponent} from "./pages/favorites/favorites.component";
import {HomeComponent} from "./pages/home/home.component";
import {CommentComponent} from "./component/comment/comment.component";
import {CommentsComponent} from "./component/comments/comments.component";
import {DetailsComponent} from "./pages/details/details.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'casas', component: HousesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'details/:id_casa', component: DetailsComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'comments', component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
