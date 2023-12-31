import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvvertenzaComponent } from './avvertenza.component';

describe('AvvertenzaComponent', () => {
  let component: AvvertenzaComponent;
  let fixture: ComponentFixture<AvvertenzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvvertenzaComponent]
    });
    fixture = TestBed.createComponent(AvvertenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
