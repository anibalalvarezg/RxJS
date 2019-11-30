import { fromEvent, of } from 'rxjs';
import { take, first } from 'rxjs/operators';


const click$ = of(1,2,3,4,5);


click$.pipe(
    first(val => val >= 2)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});