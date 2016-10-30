
var atticus = new Person(["Atticus", "2405", "47000", 3]);
var jem = new Person(["Jem", "62347", "63500", 4]);
var boo = new Person(["Boo", "11435", "54000", 3]);
var scout = new Person(["Scout", "6243", "74750", 5]);
var robert = new Person (["Robert", "26835", "66000", 1]);
var mayella = new Person (["Mayella", "89068", "35000", 2]);

var employees = [atticus, jem, boo, scout, robert, mayella];

function Person (dataArray) {
    this.name= dataArray[0];
    this.empNumber = dataArray[1];
    this.salary = dataArray[2];
    this.rating = dataArray[3];
}

function calculateSTI(empInfo) {

  var currentSalary = Math.round(parseFloat(empInfo.salary));
  var processedEmployee = [];
  var bonus = 0;
  var bonusPercentage = 0;
  var adjSalary = currentSalary;
  var totalBonus = bonus;

switch(empInfo.rating) {
  case 0:
  case 1:
  case 2:
    bonusPercentage = 0;
    break;
  case 3:
    bonusPercentage = .04;
    break;
  case 4:
    bonusPercentage = .06;
    break;
  default:
    bonusPercentage = 0;

}

bonusPercentage = adjustBonusPerctage(empInfo.empNumber, bonusPercentage, currentSalary);

processedEmployee[0] = empInfo.name;
processedEmployee[1] = bonusPercentage;

bonus = Math.round(bonusPercentage * currentSalary);
adjSalary = currentSalary + bonus;

processedEmployee[2] = adjSalary;
processedEmployee[3] = bonus;

return processedEmployee;
}

function adjustBonusPerctage(empNumber, bonusPercentage, currentSalary) {
  if(empNumber.length == 4) {
    bonusPercentage += .05;
  }

  if(currentSalary > 65000) {
    bonusPercentage -=  .01;
  }

  if(bonusPercentage > .13) {
    bonusPercentage = .13;
  }
  return bonusPercentage;
}

for(var i = 0; i < employees.length; i++) {
  console.log(calculateSTI(employees[i]));

}
