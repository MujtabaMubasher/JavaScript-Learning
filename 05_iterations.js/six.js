/******************************** Filter Method **********************************/

// its a Array Method
// its a CallBack Function
// CallBack Functions doesn't have Any Name


const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

//console.log(values);



/**-------------------------------------------------------------------------- */

const myNum = [5,5,6,2,3,9,4,10,22,66,44,11,333,]

const val = myNum.filter( (item)=>{
    
    return item > 10

})

//console.log(val);

                                         //OR
const newNum = []

myNum.filter((item)=>{

    if (item > 10) {
         return newNum.push(item) 
    }     
})

//console.log(newNum);

                                         //OR

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userBook = books.filter((item)=> item.publish > "Fiction")

  userBook = books.filter((item)=> item.publish > 1987 && item.edition > 2000)

  console.log(userBook);