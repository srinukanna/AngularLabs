import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaarComponent } from './salaar.component';

describe('SalaarComponent', () => {
  let component: SalaarComponent;
  let fixture: ComponentFixture<SalaarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
