import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError} from 'rxjs';
import { catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  url: string = 'http://demo5838836.mockable.io/contact';

  constructor(private http: HttpClient) { }


  //For a large application I would use HttpClient Interceptors instead
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';

    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getContactList(){
    return this.http.get(this.url).pipe(retry(3), catchError(this.handleError));
  }
}
