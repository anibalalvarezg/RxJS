import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


const url = 'https://httpbin.org/delay/1';

const errorManag = ( resp: AjaxError) => {
    console.warn( 'error: ', resp.message );
    return of({
        ok: false,
        usuarios: []
    })
}
// const obs$ = ajax.getJSON( url ).pipe(catchError(errorManag));
// const obs2$ = ajax( url );

const obs$ = ajax.getJSON( url ).pipe(
    catchError(errorManag)
);

obs$.subscribe({
    next: (val) => console.log('next: ', val),
    error: (error) => console.warn('error: ', error),
    complete: () => console.log( 'complete' ),
});

