import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHometownComponent } from './delete-hometown.component';

describe('DeleteHometownComponent', () => {
  let component: DeleteHometownComponent;
  let fixture: ComponentFixture<DeleteHometownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteHometownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHometownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
