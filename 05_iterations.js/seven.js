/******************************** Map Method **********************************/

// its a Array Method
// its a CallBack Function
// CallBack Functions doesn't have Any Name

const myNum =[5,9,2,2,3,5,0,23,163,5,6,3,22,11,55,449]

let newNum= myNum.map((item)=> {return item * 10})
//console.log(newNum);


                                     //OR

/******************************** Map Chaining **********************************/

newNum = myNum
            .map((item) => item + 10)
            .map((item) => item - 100)
            .map((item) => item * 10)
            .map((item) => item / 20)
            .map((item) => item % 10)
            .filter((item) => item > 1)

console.log(newNum);