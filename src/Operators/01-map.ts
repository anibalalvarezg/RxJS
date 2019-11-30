import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators'
const range$ = range(1,5);
// range$.pipe(
//     map<number, string>(x => {
//         return (x*10).toString();
//     })
// ).subscribe( console.log )

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupCode$ = keyup$.pipe(map<any, string >(x=>x.code))

keyupCode$.subscribe( val => console.log('map', val) );