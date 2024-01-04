import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArticoloComponent } from './view-articolo.component';

describe('ViewArticoloComponent', () => {
  let component: ViewArticoloComponent;
  let fixture: ComponentFixture<ViewArticoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewArticoloComponent]
    });
    fixture = TestBed.createComponent(ViewArticoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
