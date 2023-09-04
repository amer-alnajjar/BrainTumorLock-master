import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost/BrainTumorLock/blog.php';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  getData() {
    return this.http.get<any>(this.url);
  }

  setData(model: any) {
    return this.http.post<any>(this.url, model, { ...this.headers });
  }
  // Get a specific blog by ID
  getBlogById(id: number) {
    return this.http.get<any>(`${this.url}?id=${id}`);
  }

  // Create a new blog entry
  createBlog(blogData: any) {
    return this.http.post<any>(`${this.url}`, blogData, { ...this.headers });
  }

  // Update an existing blog entry
  updateBlog(blogData: any, id: any) {
    return this.http.put<any>(`${this.url}?id=${id}`, blogData, {
      ...this.headers,
    });
  }

  deleteBlog(id: number) {
    return this.http.delete<any>(`${this.url}`, {
      ...this.headers,
      body: { id: id },
    });
  }
}
