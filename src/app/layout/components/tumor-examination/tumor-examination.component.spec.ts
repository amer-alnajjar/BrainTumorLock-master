import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumorExaminationComponent } from './tumor-examination.component';

describe('TumorExaminationComponent', () => {
  let component: TumorExaminationComponent;
  let fixture: ComponentFixture<TumorExaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TumorExaminationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TumorExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
