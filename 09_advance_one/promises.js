const promiseOne =new Promise(function(resolve, reject){

      //Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){

        console.log("Async task Complete");
        resolve()

    },1000)

})


promiseOne.then(function(){

    console.log('PromiseOne Consumed');
})


/*___________________________________________________________________________ */

new Promise(function(resolve , reject){

    setTimeout(function(){
      
        console.log("Async task_2 Complete");
        resolve()

    }, 1000)

}).then(function(){

    console.log("new Promise Consumed");
})

/*___________________________________________________________________________ */

const promiseThree = new Promise(function(resolve, reject){

    setInterval(function(){

         resolve({name:"Mujtaba Mubasher", email:"someone@example.com"})

    },1000)

})

promiseThree.then(function(user){
    console.log(user);
})

/*___________________________________________________________________________ */

const promiseFour = new Promise(function(resolve, reject){

    setInterval(function(){

        let error = false
        if(!error){
            resolve({name:"Irtaza Mubasher", email:"someone@example.com"})
        }

    else{

        reject("Error: Something Went Wrong");
    }
    },1000)
})

promiseFour.then(function(user){

      console.log(user);
      return user.name

}).then(function(name){

      console.log(name);

}).catch(function(error){

    console.log(error);

}).finally(()=> console.log("Promise is Either resolve or rejected"))


/*___________________________________________________________________________ */


const promiseFive = new Promise(function(resolve, reject){

   setInterval(function(){

      let error = false

      if(!error){
       resolve({name: "JavaScript", password: 123})
      }
      else{
        reject(`JS Went Wrong`)
      }

   },1000)


})



async function consumePromiseFive(){
   try {

    const response = await promiseFive
    console.log(response);
    
   } 
   catch (error) {
      console.log(error);
   }
   
}

consumePromiseFive()


/*___________________________________________________________________________ */

async function getAllUser(){
   const response = await fetch('https://jsonplaceholder.typicode.com/users')
 try {

    const data =   await response.json()
    console.log(data[0].email);
    
 } catch (error) {
     console.log(`E: Error`);
 }
   
}

//getAllUser()

/*___________________________________________________________________________ */


const response = fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{

    return response.json()

}).then((data)=>{

    console.log(data);

}).catch((error)=>console.log(error))
