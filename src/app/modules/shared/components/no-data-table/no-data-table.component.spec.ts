import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDataTableComponent } from './no-data-table.component';

describe('NoDataTableComponent', () => {
  let component: NoDataTableComponent;
  let fixture: ComponentFixture<NoDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
