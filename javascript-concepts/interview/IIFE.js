// IIFE - Immediately invoked function expression

const atm = function (initalBal) {
    let balance = initalBal; // This variable is private
    function withdraw(amt) {
        if (amt > balance) {
            return "Somehting wrong!!"
        } else {
            balance -= amt;
            return balance;
        }
    }
    return { withdraw }
};

const account  = atm(1000);
console.log('Balance: ' ,account.withdraw(100));
console.log('Balance: ' ,account.withdraw(500));
console.log('Balance: ' ,account.withdraw(900));