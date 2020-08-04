import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailEmployeeComponent } from './show-detail-employee.component';

describe('ShowDetailEmployeeComponent', () => {
  let component: ShowDetailEmployeeComponent;
  let fixture: ComponentFixture<ShowDetailEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
