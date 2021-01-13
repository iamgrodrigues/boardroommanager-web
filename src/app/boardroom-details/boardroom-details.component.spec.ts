import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardroomDetailsComponent } from './boardroom-details.component';

describe('BoardroomDetailsComponent', () => {
  let component: BoardroomDetailsComponent;
  let fixture: ComponentFixture<BoardroomDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardroomDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardroomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
