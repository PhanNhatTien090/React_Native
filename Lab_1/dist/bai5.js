"use strict";
class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("khong hop le");
            return;
        }
        this.balance += amount;
        console.log(`Nap: ${amount}. so du: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("khong hop le");
            return;
        }
        if (amount > this.balance) {
            console.log("so du khong kha dung");
            return;
        }
        this.balance -= amount;
        console.log(`rut tien: ${amount}. so du: ${this.balance}`);
    }
    showBalance() {
        console.log(`so du hien tai: ${this.balance}`);
    }
}
const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
account.withdraw(2000);
account.showBalance();
