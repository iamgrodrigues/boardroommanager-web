import { BoardroomDetailsComponent } from './boardroom-details/boardroom-details.component';
import { CreateBoardroomComponent } from './create-boardroom/create-boardroom.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardroomListComponent } from './boardroom-list/boardroom-list.component';
import { UpdateBoardroomComponent } from './update-boardroom/update-boardroom.component';

const routes: Routes = [
  { path: '', redirectTo: 'boardrooms', pathMatch: 'full' },
  { path: 'boardrooms', component: BoardroomListComponent },
  { path: 'add', component: CreateBoardroomComponent },
  { path: 'update/:id', component: UpdateBoardroomComponent },
  { path: 'details/:id', component: BoardroomDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
