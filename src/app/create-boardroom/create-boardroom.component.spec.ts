import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoardroomComponent } from './create-boardroom.component';

describe('CreateBoardroomComponent', () => {
  let component: CreateBoardroomComponent;
  let fixture: ComponentFixture<CreateBoardroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBoardroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBoardroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
