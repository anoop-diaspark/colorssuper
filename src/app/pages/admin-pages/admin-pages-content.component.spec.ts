import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPagesContentComponent } from './admin-pages-content.component';

describe('AdminPagesContentComponent', () => {
  let component: AdminPagesContentComponent;
  let fixture: ComponentFixture<AdminPagesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPagesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPagesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
