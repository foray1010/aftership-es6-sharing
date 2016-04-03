'use strict';

let a = 1;

{
/* TDZ start */
    console.log(a);

    let a = 2;
/* TDZ end */

    console.log(a);
}
