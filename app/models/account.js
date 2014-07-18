// model file

'use strict';

function Account (num,name,type,balance){
  this.num = num;
  this.name = name;
  this.type = type;
  this.balance = balance;
  this.deposits = [];
  this.withdrawals = [];

}

Account.prototype.deposit = function(deposit){
  this.deposits.push(deposit);
  this.balance += deposit;
};

module.exports = Account;
