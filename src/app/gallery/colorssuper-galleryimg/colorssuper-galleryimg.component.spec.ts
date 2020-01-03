import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorssuperGalleryimgComponent } from './colorssuper-galleryimg.component';

describe('ColorssuperGalleryimgComponent', () => {
  let component: ColorssuperGalleryimgComponent;
  let fixture: ComponentFixture<ColorssuperGalleryimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorssuperGalleryimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorssuperGalleryimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
