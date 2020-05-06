function wakeDog(dogName, dogBreed) {
    let string = `Wake ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function leashDog(dogName, dogBreed) {
    let string = `Leash ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function walkToPark(dogName, dogBreed) {
    let string = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function throwFrisbee(dogName, dogBreed) {
    let string = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function walkHome(dogName, dogBreed) {
    let string = `Walk home with ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function unleashDog(dogName, dogBreed) {
    let string = `Unleash ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let array = []
    array.push(routine[0](dogName, dogBreed))
    array.push(routine[1](dogName, dogBreed))
    array.push(routine[2](dogName, dogBreed))
    array.push(routine[3](dogName, dogBreed))
    array.push(routine[4](dogName, dogBreed))
    array.push(routine[5](dogName, dogBreed))
    return array
}