import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearFromPatientsComponent } from './hear-from-patients.component';

describe('HearFromPatientsComponent', () => {
  let component: HearFromPatientsComponent;
  let fixture: ComponentFixture<HearFromPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HearFromPatientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HearFromPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
