
  function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return (`Wake ${dogName} the ${dogBreed}`)
  }

  function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return (`Leash ${dogName} the ${dogBreed}`)
  }

  function walkToPark (dogName, dogBreed) {
    console.log(`Walk to the park ${dogName} the ${dogBreed}`);
    return (`Walk to the park with ${dogName} the ${dogBreed}`)
  }

  function throwFrisbee (dogName, dogBreed) {
    console.log(`Throw the fribsee for ${dogName} the ${dogBreed}`);
    return (`Throw the frisbee for ${dogName} the ${dogBreed}`)
  }

  function walkHome (dogName, dogBreed) {  
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return (`Walk home with ${dogName} the ${dogBreed}`)
  }

  function unleashDog (dogName, dogBreed) {    
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return (`Unleash ${dogName} the ${dogBreed}`)
  }

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dog, breed){
  return routine.map(fn=>fn(dog, breed))
}





//   let weatherToday = "Rainy";
 
// function exerciseDog(dogName, dogBreed) {
//   if (weatherToday === "Rainy") {
//     return `${dogName} did not exercise due to rain`;
//   }
//   console.log(`Wake ${dogName} the ${dogBreed}`);
//   console.log(`Leash ${dogName} the ${dogBreed}`);
//   console.log(`Walk to the park ${dogName} the ${dogBreed}`);
//   console.log(`Throw the fribsee for ${dogName} the ${dogBreed}`);
//   console.log(`Walk home with ${dogName} the ${dogBreed}`);
//   console.log(`Unleash ${dogName} the ${dogBreed}`);
//   return `${dogName} is happy and tired!`
// }
 
// let result = exerciseDog("Byron", "poodle");
// console.log(result); // 