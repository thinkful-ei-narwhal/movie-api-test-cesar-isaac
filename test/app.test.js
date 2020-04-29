const app = require('../scr/app');
const {expect}= require('chai');
const supertest = require ('supertest');
// const mocha = require ('mocha');

describe('app modules',()=>{
  describe('GET /movie',()=>{
    it('should return 200 object with 88 arrays', ()=>{
      return supertest(app)
        .get('/movie')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res =>{
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.lengthOf(88);
          expect(res.body[0]).to.be.an('object');
          expect(res.body[0]).to.include.keys(
            'filmtv_ID','film_title','year','genre','duration','country','director','actors','avg_vote','votes');
        });
    });
  });
});