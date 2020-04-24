import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //created http as instance for httpClient
  constructor(private http: HttpClient) {}

  //For complete users
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  //For single User
  getUser(userId) {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/users/' + userId
    );
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
