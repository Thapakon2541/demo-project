import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetialComponent } from './food-detial.component';

describe('FoodDetialComponent', () => {
  let component: FoodDetialComponent;
  let fixture: ComponentFixture<FoodDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDetialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
