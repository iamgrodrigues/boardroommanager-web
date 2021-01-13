import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardroomListComponent } from './boardroom-list.component';

describe('BoardroomListComponent', () => {
  let component: BoardroomListComponent;
  let fixture: ComponentFixture<BoardroomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardroomListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardroomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
