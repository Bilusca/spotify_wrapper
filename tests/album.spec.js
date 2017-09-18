global.fetch = require('node-fetch');

import chai, { expect } from 'chai';
import { getAlbum, getAlbumTracks } from '../src/album';
import sinon from 'sinon';
import sinonChai  from 'sinon-chai';

chai.use(sinonChai);

describe('Album', () => {
    describe('Smoke Test', () => {
        it('should have getAlbum method', () => {
            expect(getAlbum).to.exist;
        });

        it('should have getAlbumTracks method', () => {
            expect(getAlbumTracks).to.exist;
        })
    });

    describe('getAlbum', () => {
        it('should fetch method', () => {
            const album = getAlbum();
            expect();
        });
    })
});