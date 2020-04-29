const app = require('../scr/app');
const {expect}= require('chai');
const supertest = require ('supertest');
const mocha = require ('mocha');

describe('app modules',()=>{
  describe('Get /movie',()=>{
    it('should return 200', ()=>{
      return supertest(app)
        .get('/movie')
        .expect(200)
        .expect('Content-Type', /json/);
        .the(res =>{
          
        })
    });
  });
});