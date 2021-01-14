import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardroomService {

  private baseUrl = 'https://boardroommanager.herokuapp.com/api/v1/boardrooms';

  constructor(private http: HttpClient) { }

  getBoardroom(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBoardroom(boardroom: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, boardroom);
  }

  updateBoardroom(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBoardroom(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBoardroomsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
