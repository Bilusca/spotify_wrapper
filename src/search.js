function searcher(type, query) {
  return this.request(`${this.apiURL}/search?q=${query}&type=${type}`);
}

export default function search() {
  return {
    artist: searcher.bind(this, 'artist'),
    albums: searcher.bind(this, 'album'),
    tracks: searcher.bind(this, 'track'),
    playlists: searcher.bind(this, 'playlist'),
  };
}
