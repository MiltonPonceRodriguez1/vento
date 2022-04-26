import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleUpdateComponent } from './motorcycle-update.component';

describe('MotorcycleUpdateComponent', () => {
  let component: MotorcycleUpdateComponent;
  let fixture: ComponentFixture<MotorcycleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcycleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
