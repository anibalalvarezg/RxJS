import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1,5);

numeros$.pipe(
    tap( x => console.log('antes ', x)),
    map( val => val * 10),
    tap({
        next: (val) => console.log('despues ', val),
        complete: () => console.log('Se termino todo')
    })
).subscribe(val => console.log('subs ',val));