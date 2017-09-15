global.fetch = require('node-fetch');
import { searchAlbums } from './main';

const albums = searchAlbums('Makalister');

albums.then(data => console.log(data));