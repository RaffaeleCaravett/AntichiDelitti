import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleOperationOnItemsComponent } from './handle-operation-on-items.component';

describe('HandleOperationOnItemsComponent', () => {
  let component: HandleOperationOnItemsComponent;
  let fixture: ComponentFixture<HandleOperationOnItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandleOperationOnItemsComponent]
    });
    fixture = TestBed.createComponent(HandleOperationOnItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
