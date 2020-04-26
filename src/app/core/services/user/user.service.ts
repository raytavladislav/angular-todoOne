import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private url = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient
    ) { }

  getUsers(): Observable<Array<Todo>>{
    return this.http.get<Array<Todo>>(this.url);
  }

  getUser(userId: number): Observable<any>{
    return this.http.get<any>(`${this.url}/${userId}`);
  }
}
