  // functions defined independantly then, added into array without parameters, and return text instead of console.log
  function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`;
  }
  function leashDog(dogName, dogBreed) {
    return `Leash ${dogName} the ${dogBreed}`;
  }
  function walkToPark  (dogName, dogBreed) {
    return `Walk to the park with ${dogName} the ${dogBreed}`;
  }
  function throwFrisbee(dogName, dogBreed) {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
  }
  function walkHome(dogName, dogBreed) {
    return `Walk home with ${dogName} the ${dogBreed}`;
  }
  function unleashDog(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}`;
  }

 let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog ]
 let array = []
function exerciseDog(dogName, dogBreed){
 for (let i = 0; i < routine.length; i++) {
   array.push(routine[i](dogName,dogBreed))
 } 
 return array;
}
// use for loop on routine to access each function and pass the attributes, push all the return strings into new array

// function writeCards( names , event) {
//   let array = [];

//   for (let i = 0; i < names.length; i++) {
  
//   array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
// }
// return array;
// }

// writeCards(names, event);

// function countDown(number){
// for (let countDown = number; countDown >= 0; countDown--) {
//   console.log(countDown);
// }

// }