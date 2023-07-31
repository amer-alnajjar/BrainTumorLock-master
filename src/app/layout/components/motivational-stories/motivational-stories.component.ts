import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivational-stories',
  templateUrl: './motivational-stories.component.html',
  styleUrls: ['./motivational-stories.component.css'],
})
export class MotivationalStoriesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
