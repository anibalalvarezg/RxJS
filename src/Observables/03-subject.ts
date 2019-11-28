import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number> ( subs => {
    const intervalo = setInterval(
        ()=>subs.next(Math.random()),1000);

    setTimeout(() => {
        subs.complete();
    }, 1000);
    return () => {
        clearInterval( intervalo);
        console.log('Intervalo terminado');
    }
});

/**
 *  1 - Casteo multiple - multiples subscripciones con mismo valor
 *  2 - Tambien es un observer
 *  3 - next, error y complete
 */
const subject$ = new Subject<number>();
const subscription = intervalo$.subscribe( subject$ )
// const sub1 = intervalo$.subscribe( observer );
// const sub2 = intervalo$.subscribe( observer );


const sub1 = subject$.subscribe( rnd => console.log('sub1: ', rnd) );
const sub2 = subject$.subscribe( rnd => console.log('sub2: ', rnd) );


setTimeout(()=>{
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500)

