import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestResearchComponent } from './latest-research.component';

describe('LatestResearchComponent', () => {
  let component: LatestResearchComponent;
  let fixture: ComponentFixture<LatestResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestResearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
