class Account {

  constructor(username) {
    this.username = username;
    // Initialize balance with $0
    this._balance = 0;
    // create empty transactions log
    this.transactions = [];
  }

  get balance() {
    return this._balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account._balance += this.value;
    this.time = new Date();
    this.account.addTransaction(this);
  }
}

class Deposit extends Transaction {

  // Update the balance in the account
  get value() {
    return this.amount;
  }
}


class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }
}


const myAccount = new Account("snow-patrol");

const t1 = new Deposit(1000, myAccount);
t1.commit();

const t2 = new Withdrawal(400, myAccount);
t2.commit();
console.log(myAccount);
