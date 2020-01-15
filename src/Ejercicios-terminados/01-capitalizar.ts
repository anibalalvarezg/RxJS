import { interval, fromEvent, from } from 'rxjs';
import { take, switchMap, concatMap, exhaustMap, map } from 'rxjs/operators';

const interval$= interval(500).pipe(take(3));
const click$ = fromEvent( document, 'click');

click$.pipe(
    exhaustMap( () => interval$ )
)
.subscribe( console.log );/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() =>{


    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
    
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());


    // Cambiar este FOR OF, por un observable y capitalizar las emisiones
    // for( let nombre of nombres ) {
    //     console.log( capitalizar(nombre) )
    // }


    const nombresC$ = from(nombres).pipe(map(capitalizar));
    
    
    nombresC$.subscribe( console.log );





})();

