import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCardComponent } from './ui-card.component';

describe('UiCardComponent', () => {
  let component: UiCardComponent;
  let fixture: ComponentFixture<UiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
