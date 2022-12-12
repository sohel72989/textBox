import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOverlayComponent } from './text-overlay.component';

describe('TextOverlayComponent', () => {
  let component: TextOverlayComponent;
  let fixture: ComponentFixture<TextOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
