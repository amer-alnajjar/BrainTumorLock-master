import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbdateBlogsComponent } from './ubdate-blogs.component';

describe('UbdateBlogsComponent', () => {
  let component: UbdateBlogsComponent;
  let fixture: ComponentFixture<UbdateBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbdateBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbdateBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
