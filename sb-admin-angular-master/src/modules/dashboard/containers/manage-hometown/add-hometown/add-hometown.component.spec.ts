import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHometownComponent } from './add-hometown.component';

describe('AddHometownComponent', () => {
  let component: AddHometownComponent;
  let fixture: ComponentFixture<AddHometownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHometownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHometownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
