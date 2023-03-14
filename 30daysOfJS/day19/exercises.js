//level 1
//1
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())

//level 2
//1
function outerFunction1() {
    let count = 0;
    function innerFunction1() {
        count++
        console.log("called inner 1")
        return count
    }

    function innerFunction2(){
        count++
        console.log("called inner 2")
        return count
    }

    function innerFunction3(){
        count++
        console.log("called inner 3")
        return count
    }
    
    return {
        innerFunction1,
        innerFunction2,
        innerFunction3,
    }
}

const threeInnerFunc = outerFunction1()
console.log(threeInnerFunc.innerFunction1())
console.log(threeInnerFunc.innerFunction2())
console.log(threeInnerFunc.innerFunction3())

//level 3
//1
function personAccount(firstname, lastname) {
    // Inner variables
    const incomes = new Map();
    const expenses = new Map();
    let totalIncome = 0;
    let totalExpense = 0;
  
    // Inner functions
    function addIncome(amount, description) {
      incomes.set(description, amount);
      totalIncome += amount;
    }
  
    function addExpense(amount, description) {
      expenses.set(description, amount);
      totalExpense += amount;
    }
  
    function accountInfo() {
      console.log(`${firstname} ${lastname}'s account:`);
      console.log(`Incomes:`);
      for (let [description, amount] of incomes) {
        console.log(`- ${description}: £${amount}`);
      }
      console.log(`Total income: £${totalIncome}`);
      console.log(`Expenses:`);
      for (let [description, amount] of expenses) {
        console.log(`- ${description}: £${amount}`);
      }
      console.log(`Total expenses: £${totalExpense}`);
    }
  
    function accountBalance() {
      return totalIncome - totalExpense;
    }
  
    // Public API
    return {
      addIncome,
      addExpense,
      accountInfo,
      accountBalance,
    };
}
  
  const johnDoe = personAccount("John", "Doe");

  johnDoe.addIncome(1000, "Salary");
  johnDoe.addIncome(500, "Bonus");
  johnDoe.addExpense(300, "Rent");
  johnDoe.addExpense(200, "Food");
  
  johnDoe.accountInfo(); // prints account information to console
  console.log(`Account balance: £${johnDoe.accountBalance()}`);