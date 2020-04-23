console.log('%cArreglos', 'color: green; font-weight: bold;');
console.log('');

// 1
// const arr = new Array(10);
// console.log(arr);

// 2
// const arr = [];
// console.log(arr);

// 3
let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos});
console.log(videoJuegos[0]);

// 4
let arregloCosas = [
    true,
    123,
    'Emmanuel',
    1 + 2,
    function(){

    },
    () => {

    },
    { a: 1 },
    [
        'X', 
        'Megaman', 
        'Zero', 
        'Dr.Light',
        [
           'Dr. Willy',
           'Woodman'
        ]
    ]
];
console.log({arregloCosas});
console.log(arregloCosas[0]);
console.log(arregloCosas[2]);
console.log(arregloCosas[6].a);
console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4][1]);