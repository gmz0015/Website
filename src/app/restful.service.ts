import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Message, Token } from './model'

@Injectable({
  providedIn: 'root'
})
export class RestfulService {

  private restfulUrl = '/api';
  csrfToken: Token = {time: '', token: ''};
  private httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json',
    }),
    withCredentials: true,
  };

  constructor(
    private http: HttpClient,
  ) { }


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
  private log(message: string) {
    console.log(message)
  }

  /** GET: send request to require a csrftoken from django */
  // getToken (): Observable<string> {
  //   return this.http.get<String>(this.restfulUrl + '/support/token/').pipe(
  //     tap(response => {
  //       this.log(`getToken process`);
  //       console.log(response)
  //       this.csrfToken = response.token
  //     }),
  //     catchError(this.handleError<any>('getToken'))
  //   );
  // }

  /** POST: Login */
login (): Observable<string> {
    if (this.csrfToken.token == '') {
      this.http.get<Token>(this.restfulUrl + '/support/token/').subscribe(
        response => {
          this.csrfToken = response
          console.log('csrfToken: ' + this.csrfToken.token)
        },
        e => console.log('Token get failed: ' + e),
        () => {
          let userInfo = new HttpParams()
              .set('csrfmiddlewaretoken', this.csrfToken.token)
              .set('username', 'admin')
              .set('password', "0803");
          return this.http.post(this.restfulUrl + '/api-auth/login/', userInfo, this.httpOptions)
        },
      );
    }else {
      let userInfo: FormData = new FormData();
      userInfo.append('csrfmiddlewaretoken', this.csrfToken.token);
      userInfo.append('username', 'admin');
      userInfo.append('password', '0803');

      return this.http.post<Token>(this.restfulUrl + '/api-auth/login/', userInfo, this.httpOptions).pipe(
        tap(_ => this.log(`login process`)),
        catchError(this.handleError<any>('login'))
      );
    }
  }

  /** POST: Logout */
  logout (): Observable<string> {
    return this.http.get<String>(this.restfulUrl + '/api-auth/logout/?next=/').pipe(
      tap(_ => this.log(`logout process`)),
      catchError(this.handleError<any>('logout'))
    );
  }

  getMessages(): Observable<Message> {
    return this.http.get<Message>(this.restfulUrl)
    .pipe(
      tap(_ => this.log('fetched messages')),
      catchError(this.handleError<any>('getMessages'))
    );
  }

  getUsers(url): Observable<string[]> {
    // if (this.csrfToken != '') {
    //   return this.http.get<string[]>(url)
    //   .pipe(
    //     tap(_ => this.log('fetched users')),
    //     catchError(this.handleError<any>('getUsers'))
    //   );
    // }else {
    //   return httpErrorResponse(message='Not login')
    // }

    return this.http.get<string[]>(url)
    .pipe(
      tap(_ => this.log('fetched users')),
      catchError(this.handleError<any>('getUsers'))
    );

  }
}
