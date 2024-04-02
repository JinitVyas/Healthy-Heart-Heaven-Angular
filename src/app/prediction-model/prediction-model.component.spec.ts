import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionModelComponent } from './prediction-model.component';

describe('PredictionModelComponent', () => {
  let component: PredictionModelComponent;
  let fixture: ComponentFixture<PredictionModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredictionModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredictionModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
