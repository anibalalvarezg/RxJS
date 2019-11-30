import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

const numbers = [1,2,3,4,5];

const totalReducer = (acumulador: number, actual: number) => {
    return acumulador + actual;
};

const total = numbers.reduce(totalReducer, 5);
console.log('Total numbers: ', total);


interval(500).pipe(
    take(6),
    tap( console.log ),
    reduce( totalReducer ))
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete')
})