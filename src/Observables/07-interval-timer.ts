import { timer, interval } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
};

const hoyEn5 = new Date(); // now

hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );



const intertval$ = interval(2000);
const timer$ = timer(hoyEn5);

console.log('inicio');
//intertval$.subscribe( observer );
timer$.subscribe( observer );
console.log('fin');



