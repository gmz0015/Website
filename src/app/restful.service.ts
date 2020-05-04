import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Message } from './message.ts'

@Injectable({
  providedIn: 'root'
})
export class RestfulService {

  private restfulUrl = '/api';

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: Message) {
    console.log(message)
  }

  getMessages(): Observable<Message> {
    return this.http.get<Message>(this.restfulUrl)
    .pipe(
      tap(_ => this.log('fetched messages')),
      catchError(this.handleError<Message>('getMessages', []))
    );
  }

  getUsers(url): Observable<[]> {
    return this.http.get<[]>(url)
    .pipe(
      tap(_ => this.log('fetched users')),
      catchError(this.handleError<[]>('getUsers', []))
    );
  }

  constructor(
    private http: HttpClient,
  ) { }
}
