import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBozzaComponent } from './view-bozza.component';

describe('ViewBozzaComponent', () => {
  let component: ViewBozzaComponent;
  let fixture: ComponentFixture<ViewBozzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBozzaComponent]
    });
    fixture = TestBed.createComponent(ViewBozzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
