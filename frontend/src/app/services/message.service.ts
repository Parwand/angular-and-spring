import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }

  getMessage(): Observable<string> {
      return this.httpClient.get("http://localhost:8080/api/hello", {responseType: 'text'});
  }

}
