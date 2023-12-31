import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubblicitaComponent } from './pubblicita.component';

describe('PubblicitaComponent', () => {
  let component: PubblicitaComponent;
  let fixture: ComponentFixture<PubblicitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PubblicitaComponent]
    });
    fixture = TestBed.createComponent(PubblicitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
