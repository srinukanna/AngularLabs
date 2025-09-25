import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classlistcomponent } from './classlistcomponent';

describe('Classlistcomponent', () => {
  let component: Classlistcomponent;
  let fixture: ComponentFixture<Classlistcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Classlistcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Classlistcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
