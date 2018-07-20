import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';
import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserService {
    // Restエンドポイント
    private usersUrl = 'http://127.0.0.1:8000/accounts/user_register/';
    // user: User;

    // コンストラクタ処理
    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

    /** POST: add a new user to the server */
    addUser (user: User): Observable<User> {
        return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
            catchError(this.handleError<User>('addUser'))
        );
    }

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
        this.messageService.add('UserService: ' + message);
    }
}
