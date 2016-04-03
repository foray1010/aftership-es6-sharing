'use strict';

let a = 1;

{
    console.log(a); // ReferenceError: a is not defined

    let a = 2;

    console.log(a); // never run~
}
