import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBoardroomComponent } from './update-boardroom.component';

describe('UpdateBoardroomComponent', () => {
  let component: UpdateBoardroomComponent;
  let fixture: ComponentFixture<UpdateBoardroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBoardroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBoardroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
