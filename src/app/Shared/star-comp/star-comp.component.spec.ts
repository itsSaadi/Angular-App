import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarCompComponent } from './star-comp.component';

describe('StarCompComponent', () => {
  let component: StarCompComponent;
  let fixture: ComponentFixture<StarCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
