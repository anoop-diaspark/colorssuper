import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryimgComponent } from './galleryimg.component';

describe('GalleryimgComponent', () => {
  let component: GalleryimgComponent;
  let fixture: ComponentFixture<GalleryimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
