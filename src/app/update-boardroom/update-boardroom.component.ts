import { Component, OnInit } from '@angular/core';
import { Boardroom } from '../boardroom';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardroomService } from '../boardroom.service';

@Component({
  selector: 'app-update-boardroom',
  templateUrl: './update-boardroom.component.html',
  styleUrls: ['./update-boardroom.component.css']
})
export class UpdateBoardroomComponent implements OnInit {

  id: number;
  boardroom: Boardroom;
  submitted = false;


  constructor(private route: ActivatedRoute,private router: Router,
    private boardroomService: BoardroomService) { }

  ngOnInit() {
    this.boardroom = new Boardroom();

    this.id = this.route.snapshot.params['id'];

    this.boardroomService.getBoardroom(this.id)
      .subscribe(data => {
        console.log(data)
        this.boardroom = data;
      }, error => console.log(error));
  }

  updateBoardroom() {
    this.boardroomService.updateBoardroom(this.id, this.boardroom)
      .subscribe(data => console.log(data), error => console.log(error));
    this.boardroom = new Boardroom();
    this.gotoList();
  }

  onSubmit() {
    this.updateBoardroom();
  }

  gotoList() {
    this.router.navigate(['/boardrooms']);
  }
}
