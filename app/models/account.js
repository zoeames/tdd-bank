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

Account.prototype.deposit = function(amount){
  this.deposits.push(amount);
  this.balance += amount;
};

Account.prototype.withdrawal = function(amount){
  this.withdrawals.push(amount);
  this.balance -= amount;

  if(this.balance < 0){
   this.balance -= 50;
  }
};


module.exports = Account;
