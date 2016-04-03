'use strict';

let a = 1;

{
    console.log(a);

    let a = 2;

    console.log(a);
}
