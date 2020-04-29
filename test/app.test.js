const app = require('../scr/app');
const {expect}= require('chai');
const supertest = require ('supertest');


describe('app modules',()=>{
  describe('GET /movie',()=>{
    it('should return 401', ()=>{
      return supertest(app)
        .get('/movie')
        .expect(401);
    });
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
    it('should return 200 object with 1 arrays', ()=>{
      return supertest(app)
        .get('/movie')
        .expect(200)
        .query({ genre: 'Drama', country:'Italy', avg_vote:8})
        .expect('Content-Type', /json/)
        .then(res =>{
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.lengthOf(1);
          expect(res.body[0]).to.be.an('object');
          expect(res.body[0]).to.include.keys(
            'filmtv_ID','film_title','year','genre','duration','country','director','actors','avg_vote','votes');
        });
    });
  });
});