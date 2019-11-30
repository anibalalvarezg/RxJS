import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

let text = document.createElement('div');

text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in velit sit amet nunc egestas porta. Integer sollicitudin neque diam, ut ultricies elit maximus a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse non accumsan est. Sed eu lobortis neque. Curabitur tincidunt augue ornare diam eleifend, nec iaculis leo accumsan. Suspendisse ac pulvinar urna, pretium consequat ligula. Nam suscipit augue eu leo tristique eleifend.
<br/><br/>
Integer non mauris vel eros viverra iaculis vitae auctor diam. Curabitur quis est congue, porta risus nec, fermentum ipsum. Donec tristique, orci eu aliquam malesuada, risus arcu ullamcorper lectus, rhoncus posuere lorem nibh et risus. Etiam iaculis tristique nibh vitae fringilla. Nunc congue nulla pulvinar, tincidunt neque nec, ullamcorper diam. Nam fermentum nisi ut nisl volutpat, nec consectetur lectus hendrerit. Proin euismod vestibulum ultricies.
<br/><br/>
Quisque nibh mi, consequat id faucibus at, malesuada sed dolor. Morbi ut nulla in augue pretium mollis. Vestibulum sodales arcu libero, eget vestibulum erat viverra at. Sed finibus justo et molestie tempor. Aliquam et pharetra leo. Curabitur eu gravida nulla. Aenean hendrerit elit diam, quis malesuada turpis scelerisque congue. Donec rhoncus nisl finibus metus faucibus, eget dignissim ipsum ornare. Nullam nisi velit, egestas sit amet consectetur sit amet, ullamcorper eu ligula. Sed porttitor neque eros, eget porta libero porttitor quis.
<br/><br/>
Curabitur in ipsum pellentesque, pellentesque turpis sed, condimentum arcu. Nullam felis purus, tempor in lectus sit amet, cursus luctus libero. Cras dui mauris, convallis eu felis a, ultricies ullamcorper dui. Cras sed euismod purus. Quisque at nunc tortor. Aenean et leo in dolor gravida gravida. Nam rhoncus odio leo, in elementum est aliquam at. In hac habitasse platea dictumst. Mauris efficitur dui id tempus hendrerit.
<br/><br/>
Maecenas lobortis libero ut turpis pharetra, nec sodales dolor feugiat. Duis tincidunt tortor et erat rutrum ultricies. Vivamus aliquam eget nunc non accumsan. In a imperdiet libero. Praesent vel ex erat. Nunc sodales mauris vitae sem vulputate congue. Suspendisse potenti. Fusce scelerisque mi ut lectus suscipit, ac scelerisque arcu sollicitudin.`

const body = document.querySelector('body');
body.append(text);


const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');

body.append(progressBar);

const calcularPorcentajeScrool = ( event => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100; 
});

//Streams
const scroll$ = fromEvent(document,'scroll');
const progress$ = scroll$.pipe(
    map( calcularPorcentajeScrool ),
    tap( console.log )
);
progress$.subscribe( porcent => {
    progressBar.style.width = `${porcent}%`;
});