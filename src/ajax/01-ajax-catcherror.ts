import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'http://api.github.com/useXXrs?per_page=5';

const fetchPromise = fetch( url );

const errorManagement = (err: AjaxError) => {
    console.warn( err.message );
    return of([]);
};

// fetchPromise
//     .then( errorManagement )
//     .then( resp => resp.json() )
//     .then( data => console.log('data: ', data) )
//     .catch( err => console.warn('error en usuarios: ', err)  );


ajax( url ).pipe(
    pluck('response'),
    catchError( errorManagement )
)
.subscribe( users => console.log('usuarios: ', users) );