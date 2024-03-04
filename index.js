//  //1.question:Convert all the strings to title caps in a string array

//  //anonymous function:

let toUpperCase = function(name) {
    let passenger = name;
    let passengerlower= passenger.toLowerCase();
    let result=passengerlower[0].toUpperCase()+ passengerlower.slice(1)
    console.log(result); //Guvi
  }
 toUpperCase("guVI");  
 
 
 //  //IIFE function:Immediately Invoked Function
 
 (function a(name){
    let passenger=name;
    let passengerlower=passenger.toLowerCase( );
    let result=passengerlower[0].toUpperCase( )+ passengerlower.slice(1) 
    console.log(result);
  })("Guvi"); 
  
 //arrow function:
 
 let b = () => {
   let e='joNas';
   let c = e .toLowerCase();
   let d = c[0].toUpperCase()+c.slice(1)
   console.log(d);
 }
 b()
 
 
 //2.question:Sum of all numbers in an array
 //Arrow function:
 
   const sum = (array) => { 
    array.reduce((acc, cur) => acc + cur, 0); 
   }
 
   console.log([1, 2, 3, 4, 5]);//15
 
 
  // Anonymous function:
 
  let aim = function() {
    let array=[1,2,3,4,5];
    let sum = array.reduce((acc, cur) =>acc + cur );
    console.log(sum)//15
  }
  aim();
 
 //IIFE function:Immediately Invoked Function
 
  (function h(array){
    let sum = array.reduce((acc, cur) =>acc + cur, 0);
    console.log(sum)//15
  })([1,2,3,4,5]);
 
 //3.question Print odd numbers in an array
 
 //IIFE-immediately invoked function:
 (function printodd(arr){
   for(let i=0;i<arr.length;i++){
      if(arr[i] % 2 !=0){
       console.log(arr[i]);
      }
     }
     })([1,2,3,4,5]);
 
     // Anonymous function:
     let printoddnumber=function(arr){
       for(let i=0;i<arr.length;i++){
         if(arr[i] % 2 !=0){
          console.log(arr[i]);
         }
        }
        };
 
     //Arrow function:
     let printoddnumbe =()=>{
       for(let i=0;i<arr.length;i++){
         if(arr[i] % 2 !=0){
          console.log(arr[i]);
         }
        }
       };
     
 
 
 //4.question Return all the prime numbers in an array
 //anonymous function:
 
 let win = function(winner){
   const hold = winner.filter(num => {
     for (let i = 2; i < num; i++) {
       if (num % i === 0) 
       return false;
     }
     return num !== 1;
   });
   console.log(hold);
 }
 win([1,2,3,4,5,6,7,8]);
 //IIFE-immediately invoked function:
 (function big(){
   let bigger = [1,2,3,4,5,6,10]
   const sky = bigger.filter(num => {
     for (let i = 2; i < num; i++) {
       if (num % i === 0) 
       return false;
     }
     return num !== 1;
   });
   console.log(sky)
 })();
 //Arrow function:
 
 let Arrow = (mirchi)=>{
   let more = mirchi.filter(num=>{  
     for (let i = 2; i < num; i++) {
      if (num % i === 0) 
      return false;
    }
    return num !== 1;
 })
 
  console.log(more);
 };
 Arrow([1,2,3,4,5,7,11]);
 
 
 