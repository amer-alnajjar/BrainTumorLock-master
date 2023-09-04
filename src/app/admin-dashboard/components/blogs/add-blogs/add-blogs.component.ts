import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../../services/blog/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent implements OnInit {
  addBlogsForm!: FormGroup;
  base64: any = '';

  constructor( private fb: FormBuilder,
    private router: Router,private blogService:BlogService) { }

  ngOnInit(): void {
      this.addBlogsForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', Validators.required],

    });
  }
    // get invalid inputs
  get errorTitle() {
    return this.addBlogsForm.get('title');
  }
  get errorDescription() {
    return this.addBlogsForm.get('description');
  }
  get errorImg() {
    return this.addBlogsForm.get('img');
  }



getImage(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.addBlogsForm.get('img')?.setValue(this.base64);
    };
  }

    addBlogs() {
    if (this.addBlogsForm.invalid) {
      return;
    }
    let model = this.addBlogsForm.value;
    this.blogService.createBlog(model).subscribe(
      (res: any) => {

        this.addBlogsForm.reset();
        this.router.navigate(['../admin/blogs']);
      },
      (err: any) => {
      alert(err)
      }
    );
  }

}
