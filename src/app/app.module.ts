import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBoardroomComponent } from './create-boardroom/create-boardroom.component';
import { BoardroomDetailsComponent } from './boardroom-details/boardroom-details.component';
import { BoardroomListComponent } from './boardroom-list/boardroom-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateBoardroomComponent } from './update-boardroom/update-boardroom.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateBoardroomComponent,
    UpdateBoardroomComponent,
    BoardroomDetailsComponent,
    BoardroomListComponent,
    BoardroomListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
