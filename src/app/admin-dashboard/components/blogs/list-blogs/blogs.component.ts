import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs!: any[];

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.getAllblogs()
  }

    //get all posts
  getAllblogs() {
    this.blogService.getData().subscribe((res: any) => (this.blogs = res));
  }

  //delete post
  deleteBlog( id: number) {
    //deleteModle // ng modal
        this.blogService.deleteBlog(id).subscribe(
          (res: any) => {
            alert('Success')
            this.getAllblogs();
          },
          (err: any) => {
              alert('Not Success')
          }
        );

  }

}
