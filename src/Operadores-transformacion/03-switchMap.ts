import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "./Interfaces/github-user.interface";
import { GithubUsersResp } from "./Interfaces/github-users.interface";

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

const mostrarUsuarios = (users: GithubUser[]) => {
    console.log(users)
    orderList.innerHTML = '';

    for( const user of users) {

        const li = document.createElement('li');
        const img = document.createElement('img');

        img.src = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append( img );
        li.append( user.login + ' ' );
        li.append( anchor );

        orderList.append(li);
    }
    
}

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<GithubUsersResp>>( text => ajax.getJSON(
            `http://api.github.com/search/users?q=${text}`
    )),
    pluck<GithubUsersResp, GithubUser[]>('items')
);

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),
    switchMap( text => ajax.getJSON(url + text))
).subscribe( console.log );