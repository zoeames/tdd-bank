// test file

/*jshint expr:true*/
/*global describe, it*/
 'use strict';

 var expect = require('chai').expect;
 var Account = require('../../app/models/account.js');

 describe('Account', function(){
  describe('constructor', function(){
    it('should create an account with arguments', function(){
      var a1 = new Account(3,'Sara','Savings',1500);
      expect(a1).to.be.instanceof(Account);
      expect(a1.num).to.equal(3);
      expect(a1.name).to.equal('Sara');
      expect(a1.type).to.equal('Savings');
      expect(a1.balance).to.equal(1500);
      expect (a1.deposits).to.be.a('array');
      expect(a1.deposits).to.have.length(0); 
      expect (a1.withdrawals).to.be.a('array');
      expect(a1.withdrawals).to.have.length(0); 
    });
  });
  describe('#deposit', function(){
    it('should add a deposit', function(){
      var sara = new Account(3,'Sara','Savings',1500);
      sara.deposit(5000);
      expect(sara.balance).to.equal(6500);
      expect(sara.deposits).to.have.length(1);
 });
  });
 });
