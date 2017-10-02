global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

let spotify = new SpotifyWrapper({
    token: 'BQA_vKSz5Djc3WMN3EjcJokCO-qDWDNv0N1w9QbuXwUhZ36xxLecNev-uR1yrxcA2wSvQ6hz5ZahjHYAbzLC0Ywmdfhhfe-lZfX5fa42lySpalAVaMhxPNPuL_CU3IPrtSovjwyjTsLUoPRv'
});

const albums = spotify.search.albums('Incubus');

albums.then(data => console.log(data))