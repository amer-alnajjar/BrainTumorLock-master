import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tumor-examination',
  templateUrl: './tumor-examination.component.html',
  styleUrls: ['./tumor-examination.component.css'],
})
export class TumorExaminationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const selectImage: any = document.querySelector('.select-image');
    const inputFile: any = document.querySelector('#file');
    const imgArea: any = document.querySelector('.img-area');

    selectImage.addEventListener('click', () => {
      inputFile.click();
    });

    inputFile.addEventListener('change', () => {
      const image: any = inputFile.files[0]; // Use inputFile.files instead of this.files
      if (image.size < 2000000) {
        const reader = new FileReader();
        reader.onload = () => {
          const allImg = imgArea.querySelectorAll('img');
          allImg.forEach((item: any) => item.remove());
          const imgUrl = reader.result;
          const img: any = document.createElement('img');
          img.src = imgUrl;
          imgArea.appendChild(img);
          imgArea.classList.add('active');
          imgArea.dataset.img = image.name;
        };
        reader.readAsDataURL(image);
      } else {
        alert('Image size more than 2MB');
      }
    });
  }
}
