var bal = 500;
var ebalance = function balance(){
  alert("Your Current Balance is : "+bal);
}
var ewithdrawal =function withdrawal(){
  var amount = Number(prompt("How much You want to Withdraw :"));
  if (bal<=500)
    alert("You can't withdraw, Insufficiant Balance");
  else{
    bal = bal-amount;
    alert("Withdrawal : "+amount);
    return bal;
  }
}
var edeposit = function deposit() {
  var amount = Number(prompt("How much You want to Deposit :"));
  bal = (bal+amount);
  alert("Successfully Deposite : "+amount);
  return bal;
}
var operation = {
  balance : ebalance,
  withdrawal : ewithdrawal,
  deposit : edeposit
}
for(index = 0; index <20 ;index++)
{
        var opt = prompt(`Enter Your Choice :
        1. Balance
        2. Withdrawal
        3. Deposit
        4. Exit`);
        switch(opt)
        {
          case '1' : case 'balance' : case 'Balance':
                    operation.balance();
                    break;
          case '2' : case 'withdrawal' : case 'Withdrawal' :
                    operation.withdrawal();
                    operation.balance();
                    break;
          case '3' : case 'deposit' : case 'Deposit' :
                    operation.deposit();
                    operation.balance();
                    break;
          case '4' : case 'exit': case 'Exit':
                    break;
          default:
                    alert("You Have Entered Wrong Choice");
        }
}
