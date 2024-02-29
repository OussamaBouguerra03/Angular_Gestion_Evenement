import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Activity } from 'src/app/modules/developpeur/views/list-activity/list-activity.component';
import { Event } from 'src/app/modules/developpeur/views/list-event/list-event.component';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  public getactivities(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>('http://localhost:8080/activity/getall')
      .pipe(
        catchError(this.handleError)
      );
  }
  getEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>('http://localhost:8080/event/getall')
      .pipe(
        catchError(this.handleError)
      );
  }
  
  // Autres méthodes du service

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      console.error('An error occurred:', error.error.message);
    } else {
      // Erreur côté serveur
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Renvoie une observable avec un message d'erreur
    return throwError('Something bad happened; please try again later.');
  }
  addActivity(a: Activity) {
    return this.httpClient.post('http://localhost:8080/activity/add', a);
  }
  public getActivitiesByEventId(eventId: number): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(`http://localhost:8080/activity/byEvent/${eventId}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  // addUser(user: User, departmentId: number) {
  //   return this.httpClient.post(`http://localhost:8080/PFE/user/addep/${departmentId}`,user);
  // }
  // addUser1(a: User, id:number) {
  //   return this.httpClient.post(`http://localhost:8080/PFE/user/add/${id}`, a);
  // }
  public deleteActivity(id: number) {
    return this.httpClient.delete(`http://localhost:8080/activity/delete/${id}`);
  }
  public updateActivity(id: number, a: Activity){
    return this.httpClient.put(`http://localhost:8080/activity/update/${id}`,a);
  }
  public retrieveActivity(id:number){
    return this.httpClient.get<Activity>(`http://localhost:8080/activity/getbyid/${id}`)
  }
   
  getActsPaged(page: number, pageSize: number): Observable<any> {
    const url = `http://localhost:8080/activity/paged?page=${page}&pageSize=${pageSize}`;
    return this.httpClient.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  public getActivities(page: number, pageSize: number): Observable<any> {
    const url = `http://localhost:8080/activity?page=${page}&pageSize=${pageSize}`;
    return this.httpClient.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  getActs(page: number, pageSize: number): Observable<any> {
    const url = `http://localhost:8080/activity?page=${page}&pageSize=${pageSize}`;
    return this.httpClient.get<any>(url);
}

}
