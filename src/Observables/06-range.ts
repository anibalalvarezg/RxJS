import { of, range, asyncScheduler } from 'rxjs';


const src$ = of(1,2,3,4,5);

src$.subscribe( console.log );


const src2$ = range(1,5, asyncScheduler);
console.log('Inicio range');
src2$.subscribe( console.log );
console.log('Fin range');
