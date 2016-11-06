var a : number = 10;
var b = 'Hello';
var i,j,k : number = 0;

i = j = k = 9;

if (a > 9) {
    console.log(b);
}

if (b == '') {
    console.log('It is empty');
} else {
    console.log('No, it is not empty: ' + b);
}

if (i > j) {
    console.log('i is bigger and j');
} else if (i < j) {
    console.log('j is bigger than i');
} else {
    console.log('i and j are equal');
}