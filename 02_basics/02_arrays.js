const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const ourRealHeros =["Muhammad SAW", "Hazrat Ali RAZ", "Umar RAZ", "Khalid Bin Waleed RAZ" ]

/*________________________________________________*/

marvel_heros.push(dc_heros)
// console.log(marvel_heros.push(dc_heros));
// console.log(marvel_heros);

/*________________________________________________*/

const new_Arr_Of_Herro = marvel_heros.concat(dc_heros)

// console.log(marvel_heros.concat(dc_heros));
// console.log(marvel_heros);
// console.log(new_Arr_Of_Herro);

/*_____________________ Spread Operator ___________________________*/

const all_Heros_Spread_Operator = [...marvel_heros , ...dc_heros, ...ourRealHeros] 

// console.log(all_Heros_Spread_Operator);

/*________________________________________________*/

const anOtherArr = [1,2,3,4,[5,6,7],8,9,10,[11,12,13,[14,15,16,[17,18,19]]]]

// console.log(anOtherArr[8][3][3][2]);

const newArr = anOtherArr.flat([8][3])
const newArr1 = anOtherArr.flat(Infinity)
// console.log(newArr);
// console.log(newArr1);
/*________________________________________________*/
{
let score = 10000000000
// console.log(Array.isArray(anOtherArr));
// console.log(Array.isArray("Mujtaba"));
// console.log(Array.from(anOtherArr));
// console.log(Array.from(score));
// console.log(Array.from("Mujtaba"));
// console.log(Array.from({name:"Mujtaba"}));

}
/*________________________________________________*/

let score = 100
let score1 = 1000000
let score2 = 10000000000
let score3 = 100000000000000000000n
let score4 = 10000000000000000000000000000n
console.log(Array.of(score,score1,score2,score3,score4));
let newArr2= Array.of(score,score1,score2,score3,score4)
console.log(newArr2);




