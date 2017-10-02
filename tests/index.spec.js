global.fetch = require('node-fetch');

import chai, { expect } from 'chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';
import sinon from 'sinon';
import sinonChai  from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);

chai.use(sinonChai);


import SpotifyWrapper from '../src/index';

describe('SpotifyWrapper Library', () => {
    it('should create an instance of SpotifyWrapper', () => {
        let spotify = new SpotifyWrapper({});
        expect(spotify).to.be.an.instanceOf(SpotifyWrapper)
    });

    it('should receive apiURL as an option', () => {
        let spotify = new SpotifyWrapper({
            apiURL: 'blablabla'
        });

        expect(spotify.apiURL).to.be.equal('blablabla');
    });

    it('should use default apiURL if not provided', ()=> {
        let spotify = new SpotifyWrapper({});

        expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
    });

    it('should receive token as an option', () => {
        let spotify = new SpotifyWrapper({
            token: 'blablabla'
        });

        expect(spotify.token).to.be.equal('blablabla');
    });

    describe('Request Methods', () => {
        let stubedFetch;
        let promise;
    
        beforeEach(() => {
            stubedFetch = sinon.stub(global, 'fetch');
            promise = stubedFetch.returnsPromise();
        });
    
        afterEach(() => {
            stubedFetch.restore();
        })

        it('should have request method', () => {
            let spotify = new SpotifyWrapper({});

            expect(spotify.request).to.exist;
        });

        it('should all fetch when request', () => {
            let spotify = new SpotifyWrapper({
                token: 'foo'
            });
            
            spotify.request('url');
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it('should call fetch with alright url passed', () => {
            let spotify = new SpotifyWrapper({
                token: 'foo'
            });
            
            spotify.request('url');
            expect(stubedFetch).to.have.been.calledWith('url');
        });

        it('should call fetch with right headers passed', () => {
            let spotify = new SpotifyWrapper({
                token: 'foo'
            });

            const headers = {
                headers: {
                    Authorization: `Bearer foo`
                }
            }

            spotify.request('url');
            expect(stubedFetch).to.have.been.calledWith('url', headers);
        })
    })
})