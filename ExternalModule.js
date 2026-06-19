
// .....External Module/Package...

const randomCountry = require('random-country');

console.log(randomCountry())





const nameToImdb = require('name-to-imdb');


async function getMovieInfo() {
    try {
        
        const movie = await nameToImdb({ name: 'The Dark Knight' });
        console.log('Movie Name :', movie);
    } catch (error) {
        console.error('Error:', error);
    }
}

getMovieInfo();

