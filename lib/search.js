'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

var _config = require('./config');

var _utils = require('./utils');

var search = exports.search = function search(query, type) {
  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer BQD3I9sabAfh7Q0PbxgsQmQKK9xem1KkPjwNeMtKD5vKJ4DQ6lla9dsgiCHsIKvSXFos8aDAp-F-ty-kXK5VX0rjLcZxIoZdSRxup_DT3VsYgMEdvCdFClslFsDcNVhwv9Vs_uTE7umpQsyq'
    }
  }).then(_utils.toJson);
};

var searchArtists = exports.searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};

var searchTracks = exports.searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};