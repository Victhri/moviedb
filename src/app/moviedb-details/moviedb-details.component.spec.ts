import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedbDetailsComponent } from './moviedb-details.component';

describe('MoviedbDetailsComponent', () => {
  let component: MoviedbDetailsComponent;
  let fixture: ComponentFixture<MoviedbDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedbDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviedbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
