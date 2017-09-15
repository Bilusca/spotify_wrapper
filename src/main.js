export const search = (query, type) =>
fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer BQD3I9sabAfh7Q0PbxgsQmQKK9xem1KkPjwNeMtKD5vKJ4DQ6lla9dsgiCHsIKvSXFos8aDAp-F-ty-kXK5VX0rjLcZxIoZdSRxup_DT3VsYgMEdvCdFClslFsDcNVhwv9Vs_uTE7umpQsyq'
  }
})
  .then(data => data.json())


export const searchArtists = (query) => 
  search(query, 'artist');

export const searchAlbums = (query) => 
  search(query, 'album');

export const searchTracks = (query) => 
  search(query, 'track');

export const searchPlaylists = (query) => 
  search(query, 'playlist');