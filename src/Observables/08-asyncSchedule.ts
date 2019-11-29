import { asyncScheduler } from 'rxjs';


const saludar = () => console.log('Hola Mundo');

asyncScheduler.schedule(saludar,5000);


const subs = asyncScheduler.schedule( function(state){
    
    console.log('state', state);
    this.schedule(state++,2000);
}, 3000, 1);

// setTimeout(()=> {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(()=>subs.unsubscribe(),6000);