import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationalStoriesComponent } from './motivational-stories.component';

describe('MotivationalStoriesComponent', () => {
  let component: MotivationalStoriesComponent;
  let fixture: ComponentFixture<MotivationalStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivationalStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivationalStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
