import { Component, OnInit } from '@angular/core';
import { Boardroom } from '../boardroom';
import { BoardroomService } from '../boardroom.service';
import { BoardroomListComponent } from '../boardroom-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-boardroom-details',
  templateUrl: './boardroom-details.component.html',
  styleUrls: ['./boardroom-details.component.css']
})
export class BoardroomDetailsComponent implements OnInit {

  id: number;
  boardroom: Boardroom;

  constructor(private route: ActivatedRoute, private router: Router,
  private BoardroomService: BoardroomService) { }

  ngOnInit(): {
    this.boardroom = new Boardroom();
    this.id = this.route.snapshot.params['id'];

    this.boardroomService.getBoardroom(this.id)
    .subscribe(data => {
      console.log(data)
      this.boardroom = data;

    }, error => console.log(error));
  }
  list(){
    this.router.navigate(['boardrooms']);
  }

}
