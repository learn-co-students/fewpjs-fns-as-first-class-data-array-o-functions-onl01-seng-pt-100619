function wakeDog(dogName, dogBreed) {
    let step =  `Wake ${dogName} the ${dogBreed}`
    console.log(step);
    return step;
}
function leashDog(dogName, dogBreed) {
    let step =`Leash ${dogName} the ${dogBreed}`;
    console.log(step);
    return step;
}
function walkToPark(dogName, dogBreed) {
    let step =`Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(step);
    return step;
}
function throwFrisbee(dogName, dogBreed) {
    let step =`Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(step);
    return step;
}
function walkHome(dogName, dogBreed) {
    let step =`Walk home with ${dogName} the ${dogBreed}`;
    console.log(step);
    return step;
}
function unleashDog(dogName, dogBreed) {
    let step =`Unleash ${dogName} the ${dogBreed}`;
    console.log(step);
    return step;
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];

function exerciseDog(dogName, dogBreed){
   const steps= routine.map(step => step(dogName, dogBreed));
   return steps;
}