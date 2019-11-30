import { range, Observable, from } from 'rxjs';
import { filter, mapTo, pluck } from 'rxjs/operators';

const range$ = range(1,10);

// range$.pipe(filter((x,i)=>{
//                 console.log('index: ', i);
//                 return x%2===1;
//             })).subscribe( console.log );

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

const obs$ = from<Personaje[]>(personajes);

const obsFilter$ = obs$.pipe(
    filter(per =>per.tipo === 'villano'),
    pluck('nombre')
);

obsFilter$.subscribe( console.log );