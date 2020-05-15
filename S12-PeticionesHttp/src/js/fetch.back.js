const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// fetch(jokeUrl).then(resp => {
//     console.log(resp);
//     resp.json().then(data => {
//         const { id, value } = data;
//         console.log(data);
//         console.log(id);
//         console.log(value);
//     });
// });

fetch(jokeUrl)
    .then(resp => resp.json())
    .then(data => {
        const { id, value } = data;
        console.log(id, value);
    });