import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalGuideComponent } from './medical-guide.component';

describe('MedicalGuideComponent', () => {
  let component: MedicalGuideComponent;
  let fixture: ComponentFixture<MedicalGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});








