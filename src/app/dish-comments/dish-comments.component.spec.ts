import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCommentsComponent } from './dish-comments.component';

describe('DishCommentsComponent', () => {
  let component: DishCommentsComponent;
  let fixture: ComponentFixture<DishCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
