import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private http: HttpClient) {}

  generateShortUrl(url: any) {
    return this.http.post(`${baseUrl}/generate`, url);
  }
}
