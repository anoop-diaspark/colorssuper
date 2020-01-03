import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMainpageComponent } from './show-mainpage.component';

describe('ShowMainpageComponent', () => {
  let component: ShowMainpageComponent;
  let fixture: ComponentFixture<ShowMainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
