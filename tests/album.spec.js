global.fetch = require('node-fetch');

import chai, { expect } from 'chai';
import SpotifyWrapper from '../src/index';
import sinon from 'sinon';
import sinonChai  from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);

chai.use(sinonChai);

describe('Album', () => {
    let stubedFetch;
    let promise;
    let spotify;

    beforeEach(() => {
        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.returnsPromise();
        spotify = new SpotifyWrapper({ 
            token: 'foo'
        });
    });

    afterEach(() => {
        stubedFetch.restore();
    })

    describe('Smoke Test', () => {
        it('should have getAlbum method', () => {
            expect(spotify.album.getAlbum).to.exist;
        });

        it('should have getAlbums method', () => {
            expect(spotify.album.getAlbums).to.exist;
        });

        it('should have getAlbumTracks method', () => {
            expect(spotify.album.getAlbumTracks).to.exist;
        });
    });

    describe('getAlbum', () => {
        it('should fetch method', () => {
            const album = spotify.album.getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it('should use the correct URL', () => {
            const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubedFetch).to.have.been
                .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

                const album2 = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
                expect(stubedFetch).to.have.been
                    .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk')
        });

        it('should return the correct data from Promise', () => {
            promise.resolves({'album': 'name'});
            const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(album.resolveValue).to.be.eql({'album': 'name'});
        });
    });

    describe('getAlbums', () => {
        it('should fetch method', () => {
            const album = spotify.album.getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it('should use the correct URL', () => {
            const album = spotify.album.getAlbums(['382ObEPsp2rxGrnsizN5TX', '1A2GTWGtFfWp7KSQTwWOyo']);
            expect(stubedFetch).to.have.been
                .calledWith('https://api.spotify.com/v1/albums/?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo');

                const album2 = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTk', '1A2GTWGtFfWp7KSQTwWOyo']);
                expect(stubedFetch).to.have.been
                    .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTk,1A2GTWGtFfWp7KSQTwWOyo')
        });

        it('should return the correct data from Promise', () => {
            promise.resolves({'album': 'name'});
            const album = spotify.album.getAlbums(['382ObEPsp2rxGrnsizN5TX', '1A2GTWGtFfWp7KSQTwWOyo']);
            expect(album.resolveValue).to.be.eql({'album': 'name'});
        });
    });

    describe('getAlbumTracks', () => {
        it('should fetch method', () => {
            const album = spotify.album.getAlbumTracks();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it('should use the correct URL', () => {
            const album = spotify.album.getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubedFetch).to.have.been
                .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');

                const album2 = spotify.album.getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTk');
                expect(stubedFetch).to.have.been
                    .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk/tracks');
        });

        it('should return the correct data from Promise', () => {
            promise.resolves({'album': 'name'});
            const album = spotify.album.getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
            expect(album.resolveValue).to.be.eql({'album': 'name'});
        });
    });
});