import { BoardroomService } from '../boardroom.service';
import { Boardroom } from '../boardroom';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-boardroom',
  templateUrl: './create-boardroom.component.html',
  styleUrls: ['./create-boardroom.component.css']
})
export class CreateBoardroomComponent implements OnInit {

  boardroom: Boardroom = new Boardroom();
  submitted = false;

  constructor(private boardroomService: BoardroomService,
    private router: Router) { }

  ngOnInit() {
  }

  newBoardroom(): void {
    this.submitted = false;
    this.boardroom = new Boardroom();
  }

  save() {
    this.boardroomService.createBoardroom(this.boardroom)
      .subscribe(data => console.log(data), error => console.log(error));
    this.boardroom = new Boardroom();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/boardrooms']);
  }
}
