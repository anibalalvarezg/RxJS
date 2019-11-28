import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
}


const intervalo$ = new Observable<number> ( subs => {
    
    //Crear contador 1,2,3,4, .... 
    let cont = 0;
    const interval = setInterval( () => {
        subs.next(++cont);
        console.log(cont);
    }, 1000);

    setTimeout(() => {
       subs.complete(); 
    }, 3000);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido.');
    }
});

const subscription = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription.add(subscription2)
            .add(subscription3);

setTimeout(()=> {
    subscription.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();
    
    console.log('Completado Timeout');
},3000);