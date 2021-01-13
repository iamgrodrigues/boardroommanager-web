import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBoardroomComponent } from './create-boardroom/create-boardroom.component';
import { BoardroomDetailsComponent } from './boardroom-details/boardroom-details.component';
import { BoardroomListComponent } from './boardroom-list/boardroom-list.component';
import { UpdateBoardroomComponent } from './update-boardroom/update-boardroom.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBoardroomComponent,
    BoardroomDetailsComponent,
    BoardroomListComponent,
    UpdateBoardroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
