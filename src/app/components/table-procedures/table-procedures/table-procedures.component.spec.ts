import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProceduresComponent } from './table-procedures.component';

describe('TableProceduresComponent', () => {
  let component: TableProceduresComponent;
  let fixture: ComponentFixture<TableProceduresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableProceduresComponent]
    });
    fixture = TestBed.createComponent(TableProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
