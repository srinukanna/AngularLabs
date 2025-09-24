import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgComponent } from './og.component';

describe('OgComponent', () => {
  let component: OgComponent;
  let fixture: ComponentFixture<OgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
