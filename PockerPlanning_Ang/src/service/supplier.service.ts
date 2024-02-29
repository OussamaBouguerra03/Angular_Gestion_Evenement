import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Supplier } from 'src/app/modules/developpeur/views/list-supplier/list-supplier.component';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpClient: HttpClient) { }

  public getsuppliers(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>('http://localhost:8080/supplier/getall')
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
  addSupplier(a: Supplier) {
    return this.httpClient.post('http://localhost:8080/supplier/add', a);
  }
  public deleteSupplier(id: number) {
    return this.httpClient.delete(`http://localhost:8080/supplier/delete/${id}`);
  }
  public updateSupplier(id: number, a: Supplier){
    return this.httpClient.put(`http://localhost:8080/supplier/update/${id}`,a);
  }
  public retrieveSupplier(id:number){
    return this.httpClient.get<Supplier>(`http://localhost:8080/supplier/getbyid/${id}`)
  }
}
