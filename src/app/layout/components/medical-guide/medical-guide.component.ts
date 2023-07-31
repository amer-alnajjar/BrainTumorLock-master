import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-guide',
  templateUrl: './medical-guide.component.html',
  styleUrls: ['./medical-guide.component.css'],
})
export class MedicalGuideComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
