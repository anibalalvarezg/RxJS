import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
}

// const obs$ = Observable.create();
const obs$ = new Observable<string>( susbs => {
    
    susbs.next('hola');
    susbs.next('mundo');

    susbs.next('hola');
    susbs.next('mundo');
    
    // const a = undefined;
    // a.nombree = 'Anibal';

    susbs.complete();

    susbs.next('prueba complete.')

});

obs$.subscribe( observer );
// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error', error),
//     () => console.info('Completado')
// );

obs$.subscribe()

