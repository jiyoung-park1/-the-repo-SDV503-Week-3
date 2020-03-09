const firstword = "Hello";
const secondword = "world";

console.log(firstword + secondword);
console.log(`${ firstword } ${ secondword }`);

console.log(10 - 5);
console.log(10  - `5`);
console.log('10' * 5);
console.log(10 + 10 -`5`);
console.log(`10`/`10`);

console.log(1 + 2, 3 + 4);
console.log(5 + 6, 7 + 8);

console.log("Comma operator in a  variable");
let a = (1 +2, 3 + 4);
console.log(a);

console.log( +true);

let x = 10;
console.log(x);
x += 10;
console.log(x);
x -= 10;
console.log(x);
x *= 10;
console.log(x);
x /= 10;
console.log(x);
x **= 10;
console.log(x);

let A = 1;
let B = 1;
if (A == B) {
    console.log('same numbers')
}

console.log(10 == 5);
console.log(10 != 5);
console.log(10 < 5);
console.log(10 > 5);
console.log(10 <= 5);
console.log(10 >= 5);

console.log(10 == "5");
console.log(10 == "10");
console.log(10 != "5");
console.log(10 != "10");
console.log(10 < "5");
console.log(10 < "10");
console.log(10 > "5");
console.log(10 > "10");
console.log(10 <= "5");
console.log(10 <= "10");
console.log(10 >= "5");
console.log(10 >= "10");

console.log(true ==1);
console.log(true == "1");
console.log(true == 0);
console.log(false == 1);
console.log(false == 0);
console.log(false == "0");

console.log(" ");

console.log(true != 1);
console.log(true != "1");
console.log(true != 0);
console.log(false != 1);
console.log(false != "0");

console.log("A" == "A");
console.log("a" == "a");

console.log(" ");
console.log("z" > "A");

console.log(" ");
console.log("Raise" > "Race");
console.log("Break" > "Brake");
console.log("Lose" < "Loose");

console.log("A" == "a");
console.log("a" > "A");

console.log(" ");
console.log("book" > "Book");

console.log(1 == "!");
console.log(1 == true);

console.log(" ");
console.log(0 == false);
console.log("" == false);

console.log(1 == "1");
console.log(1 === "1");
console.log(" ");

console.log(1 == true);
console.log(1 === true);
console.log(" ");

console.log(0 == false);
console.log(0 === false);

console.log(1 != "1");
console.log(1 !== "1");
console.log(" ");

console.log(1 != true);
console.log(1 !== true);
console.log(" ");

console.log(0 != false);
console.log(0 !== false);

console.log(null == 0);
console.log(null === 0);
console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(" ");
console.log(undefined == null);
console.log(undefined === 0);
console.log(undefined > 0);
console.log(undefined >= 0);

console.log(null +1);
console.log(undefined > 0);
console.log(undefined + 1);