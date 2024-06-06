import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {}
  API_URL: string = 'https://api.cloudinary.com/v1_1/devr9hihw/image/upload';

  Upload = (data: File) => {
    const formData = new FormData();
    formData.append('file', data);
    formData.append('upload_preset', 'upload');
    return this.http.post(this.API_URL, formData);
  };
}
