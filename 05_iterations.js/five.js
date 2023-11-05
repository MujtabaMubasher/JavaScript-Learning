/******************************** forEach Loop **********************************/

// forEach is Higher Order Function
// its a Array Method
// its a CallBack Function
// CallBack Functions doesn't have Any Name

const programming = ["C++","Java","Ruby","C#","Js","Python"]

programming.forEach( function (i) {
   
   // console.log(i);

})

                                     //OR

programming.forEach((i)=> {
     
    //console.log(i);
})


                                    //OR

function printMe(items){
    console.log(items);

}

programming.forEach( (i)=> {

  //printMe(i)

});

                                    //OR

//programming.forEach(printMe) // => Only Gives the Refrence of Function

                                    //OR

programming.forEach((items, index, arr)=>{  // => Also we Gives These Perameters 'items, index, arr'
   // console.log(items , index , arr);

})


                                    //OR

                                    
const myCoding = [
    {
        languadgeName: "JavaScript",
        fileType: 'Js'
    },
    {
        languadgeName: "Python",
        fileType: 'py'
    },
    {
        languadgeName: "C++",
        fileType: 'cpp'
    }
]

myCoding.forEach((i)=>{
   console.log(i.languadgeName, " : ", i.fileType);
})

