import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-research',
  templateUrl: './latest-research.component.html',
  styleUrls: ['./latest-research.component.css'],
})
export class LatestResearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
