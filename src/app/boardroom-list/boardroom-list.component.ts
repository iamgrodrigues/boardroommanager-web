import { Component, OnInit } from '@angular/core';
import { BoardroomDetailsComponent } from 'src/app/boardroom-details.component';
import { Observable } from 'rxjs';
import { BoardroomService } from '../boardroom.service';
import { Boardroom } from '../boardroom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boardroom-list',
  templateUrl: './boardroom-list.component.html',
  styleUrls: ['./boardroom-list.component.css']
})
export class BoardroomListComponent implements OnInit {
  boardrooms: Observable<Boardroom[]>;

  constructor(private boardroomService: BoardroomService,
    private router: Router) { }

  ngOnInit():
    this.reloadData();
}
reloadData(){
  this.boardrooms = this.boardroomService.getBoardroomList();
}

deleteRoom(id: number) {
  this.boardroomService.deleteBoardroom(id)
    .subscribe(
      data => {
        console.log(data)
        this.reloadData();
      },
      error => console.log(error)
    );
  boardroomDetails(id: number){
    this.router.navigate(['details', id]);
  }
  updateBoardroom(id: number){
    this.router.navigate(['update', id]);
  }

}

}
