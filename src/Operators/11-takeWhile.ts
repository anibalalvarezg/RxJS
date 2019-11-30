import { fromEvent, of } from "rxjs";
import { map, takeWhile } from "rxjs/operators";


const number$ = of(1,2,3,4,5)

number$.pipe(
    takeWhile( x => x < 3, true )
).subscribe({
    next: (val) => console.log('next: ', val),
    complete: () => console.log('Complete.')
});