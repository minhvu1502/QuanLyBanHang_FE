import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHometownComponent } from './manage-hometown.component';

describe('ManageHometownComponent', () => {
  let component: ManageHometownComponent;
  let fixture: ComponentFixture<ManageHometownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageHometownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHometownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
