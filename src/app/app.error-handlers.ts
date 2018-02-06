import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

export class Errorhandler {

    static handlerError(error: HttpErrorResponse | any) {
        let errorMessage: String;
        if (error instanceof HttpErrorResponse) {
            const body = error.error;
            errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`;
        } else {
            errorMessage = error.errorMessage ? error.errorMessage : error.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}
