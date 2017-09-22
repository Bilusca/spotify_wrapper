global.fetch = require('node-fetch');

import chai, { expect } from 'chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';
import sinon from 'sinon';
import sinonChai  from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);

chai.use(sinonChai);

describe('Album', () => {
    let stubedFetch;
    let promise;

    beforeEach(() => {
        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.returnsPromise();
    });

    afterEach(() => {
        stubedFetch.restore();
    })

    describe('Smoke Test', () => {
        it('should have getAlbum method', () => {
            expect(getAlbum).to.exist;
        });

        it('should have getAlbums method', () => {
            expect(getAlbums).to.exist;
        });

        it('should have getAlbumTracks method', () => {
            expect(getAlbumTracks).to.exist;
        });
    });

    describe('getAlbum', () => {
        it('should fetch method', () => {
            const album = getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it('should use the correct URL', () => {
            const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubedFetch).to.have.been
                .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

                const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
                expect(stubedFetch).to.have.been
                    .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk')
        });

        it('should return the correct data from Promise', () => {
            promise.resolves({'album': 'name'});
            const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(album.resolveValue).to.be.eql({'album': 'name'});
        });
    });

    describe('getAlbums', () => {
        it('should fetch method', () => {
            const album = getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it('should use the correct URL', () => {
            const album = getAlbums(['382ObEPsp2rxGrnsizN5TX', '1A2GTWGtFfWp7KSQTwWOyo']);
            expect(stubedFetch).to.have.been
                .calledWith('https://api.spotify.com/v1/albums/?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo');

                const album2 = getAlbums(['4aawyAB9vmqN3uQ7FjRGTk', '1A2GTWGtFfWp7KSQTwWOyo']);
                expect(stubedFetch).to.have.been
                    .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTk,1A2GTWGtFfWp7KSQTwWOyo')
        });

        it('should return the correct data from Promise', () => {
            promise.resolves({'album': 'name'});
            const album = getAlbums(['382ObEPsp2rxGrnsizN5TX', '1A2GTWGtFfWp7KSQTwWOyo']);
            expect(album.resolveValue).to.be.eql({'album': 'name'});
        });
    });

    describe('getAlbumTracks', () => {
        it('should fetch method', () => {
            const album = getAlbumTracks();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it('should use the correct URL', () => {
            const album = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubedFetch).to.have.been
                .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');

                const album2 = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTk');
                expect(stubedFetch).to.have.been
                    .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk/tracks');
        });

        it('should return the correct data from Promise', () => {
            promise.resolves({'album': 'name'});
            const album = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
            expect(album.resolveValue).to.be.eql({'album': 'name'});
        });
    });
});