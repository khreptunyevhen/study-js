// console.log("---------- functions ---------");
// const calcAge = function (currYear, birthYear) {
//     return currYear - birthYear;
// }

// const myAge = calcAge(2023, 1993);

// console.log("function expression");
// console.log(calcAge);
// console.log(myAge);

// const calcAge2 = (currYear, birthYear) => currYear - birthYear;

// const myAge2 = calcAge2(2023, 1993);

// console.log("arrow function");
// console.log(calcAge2);
// console.log(myAge2);

/* Write your code below. Good luck! 🙂 */
const DATA_1 = [44, 23, 71];
const DATA_2 = [23, 34, 27];

const calcAverage  = (res) => res.reduce((acc, num) => acc += num, 0) / res.length;

const scoreDolphins = calcAverage(DATA_1);
const scoreKoalas = calcAverage(DATA_2);

const checkWinner = function (avgDolphins, avgKoalas) {
    
    if (avgDolphins === avgKoalas) return console.log("No team wins...");
    
    const winner = {
        name: avgDolphins > avgKoalas ? "Dolphins" : "Koalas",
        points: avgDolphins > avgKoalas ? avgDolphins : avgKoalas
    }
    
    const resNotification = `${winner.name} win (${winner.points} vs. ${winner.name === "Dolphins" ? avgKoalas : avgDolphins})`;

    return resNotification;
}

const competitionResult = checkWinner(scoreDolphins, scoreKoalas);

console.log(competitionResult)
