import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHometownComponent } from './edit-hometown.component';

describe('EditHometownComponent', () => {
  let component: EditHometownComponent;
  let fixture: ComponentFixture<EditHometownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHometownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHometownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
