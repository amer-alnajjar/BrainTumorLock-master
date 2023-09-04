import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogsComponent } from './add-blogs.component';

describe('AddBlogsComponent', () => {
  let component: AddBlogsComponent;
  let fixture: ComponentFixture<AddBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
