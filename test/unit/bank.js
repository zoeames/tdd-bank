// test file

/*jshint expr:true*/
/*global describe, it*/
 'use strict';

 var expect = require('chai').expect;
 var Bank = require('../../app/models/bank.js');

 describe('Bank', function(){
  describe ('constructor',function(){
  it ('should create a new Bank', function(){
    var bank = new Bank('Chase');
    expect(bank).to.be.ok;
    expect(bank).to.be.instanceof(Bank);
    expect(bank.name).to.equal ('Chase');
    expect (bank.accounts).to.be.a('array');
    expect(bank.accounts).to.have.length(0); 
  });
  });
 });

 
