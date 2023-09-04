import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/admin-dashboard/services/blog/blog.service';

@Component({
  selector: 'app-latest-research',
  templateUrl: './latest-research.component.html',
  styleUrls: ['./latest-research.component.css'],
})
export class LatestResearchComponent implements OnInit {
  blogs: any[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getAllblogs();
  }
  getAllblogs() {
    this.blogService.getData().subscribe((res: any) => (this.blogs = res));
  }
}
