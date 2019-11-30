import { range, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators'
const range$ = range(1,5);
// range$.pipe(
//     map<number, string>(x => {
//         return (x*10).toString();
//     })
// ).subscribe( console.log )

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupCode$ = keyup$.pipe(map<any, string >(x=>x.code))

const keyupPluck$ = keyup$.pipe(pluck('key'));

keyupCode$.subscribe( val => console.log('map', val) );
keyupPluck$.subscribe( val => console.log('pluck', val) );