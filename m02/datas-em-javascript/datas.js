const { format, parse, add } = require('date-fns')

const date = new Date(2022, 5, 6)

console.log(date);

console.log(format(date, "dd/MMMM/yyyy"));

console.log(parse('06/06/1994', 'MM/dd/yyyy', new Date()));

console.log(add(date, {
    seconds: 2,
    days: 10
}));

