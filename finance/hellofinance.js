var Finance = require('financejs');
var finance = new Finance();

// to calculate amortization
var amortization = finance.AM(20000, 7.5, 5, 0);
console.log(amortization );

console.log(finance.PV(5,100));
