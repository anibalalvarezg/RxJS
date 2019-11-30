import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators'
const range$ = range(1,5);
// range$.pipe(
//     map<number, string>(x => {
//         return (x*10).toString();
//     })
// ).subscribe( console.log )

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupMapTo$ = keyup$.pipe(mapTo('tecla presionada'));


keyupMapTo$.subscribe( console.log );

