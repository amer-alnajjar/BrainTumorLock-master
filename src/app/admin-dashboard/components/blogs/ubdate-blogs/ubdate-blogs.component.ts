import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../../services/blog/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ubdate-blogs',
  templateUrl: './ubdate-blogs.component.html',
  styleUrls: ['./ubdate-blogs.component.css'],
})
export class UbdateBlogsComponent implements OnInit {
  ubdateBlogsForm!: FormGroup;
  base64: any = '';
  id: any;
  blog: any;
  img: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private blogService: BlogService,
    private rout: ActivatedRoute
  ) {
    this.id = this.rout.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.ubdateBlogsForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', Validators.required],
    });
    this.getBlogById();
  }

  // get invalid inputs
  get errorTitle() {
    return this.ubdateBlogsForm.get('title');
  }
  get errorDescription() {
    return this.ubdateBlogsForm.get('description');
  }
  get errorImg() {
    return this.ubdateBlogsForm.get('img');
  }

  getImage(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.ubdateBlogsForm.get('img')?.setValue(this.base64);
    };
  }

  getBlogById() {
    this.blogService.getBlogById(this.id).subscribe((res) => {
      this.blog = res;
      this.img = res.img;
      this.ubdateBlogsForm.patchValue({
        title: res.title,
        description: res.description,
        img: res.img,
      });
    });
  }

  ubdateBlog() {
    if (this.ubdateBlogsForm.invalid) {
      return;
    }
    let model = this.ubdateBlogsForm.value;
    this.blogService.updateBlog(model, this.id).subscribe(
      (res) => {
        this.router.navigate(['../admin/blogs']);
      },
      (err) => {
        alert(err);
      }
    );
  }
}
