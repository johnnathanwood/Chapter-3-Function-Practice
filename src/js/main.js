function displayName (firstName, lastName) {
    /*
      Since the code needed to display a person's name is written
      only once, we never have to worry about a developer
      misspelling a word, or missing a character because she
      needed to write the code for the 34th time.
    */

  console.log(`${firstName} ${lastName}`)
  }
  displayName("Jamal", "Haynes")
  displayName("Debra", "Gordon")
  displayName("Svetlana", "Irinov")
  displayName("Sequina", "Rodriguez")
  displayName("Jessawynne", "Parker")

  const bugSquasher = function (bug, squasher) {
    return `The ${bug} was squashed by a ${squasher}`
}

bugSquasher("Beetle", "Boot")


const noise = function () {
    return Math.random()
  }
  console.log(noise())
  console.log(noise())

//   const bandNumber = 0

//   const takeNumber = function (bandName) {
//       bandNumber =+ 1
//       return bandNumber + "." + bandName
//       /*
//           Write your awesome code here. See comments
//           below for what should be returned.
//       */

//   }
//   const scum = takeNumber("Galactic Scum")
//   console.log(scum)  // This should print "1. Galactic Scum" in the console

//   const under = takeNumber("Underdogs")
//   console.log(under)  // This should print "2. Underdogs" in the console

//   console.log("Battle of the Bands")

let bandNumber = 0;

const takeNumber = function (name) {
    bandNumber +=1 ;
    return bandNumber + "." + name  }

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

const hamburger = {
	name: "Hamburger",
	type: "beef",
	cooked: false,
}
const zucchini = {
	name: "Zucchini",
	type: "vegetable",
	cooked: false,
}
const chickenBreast = {
	name: "Chicken Breast",
	type: "chicken",
	cooked: false,
}
const corn = {
	name: "Corn",
	type: "vegetable",
	cooked: false,
}
const steak = {
	name: "Steak",
	type: "beef",
	cooked: false,
}

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

function fridge (currentObject) {
    currentObject.cooked = false;
    uncookedFood.push(currentObject);
};
uncookedFood.forEach((food) =>{
    fridge(food)
})
console.log("We gone!:",uncookedFood)

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

// Your task is to iterate over the array of uncookedFood and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.

uncookedFood.forEach((food) =>{
    grill(food)
})
console.log("We have the meat!:",cookedFood)

// Create an array that contains the words in the sentence
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         theWordArray.forEach((taco) => {
//             buildMeUp += `${taco}
//             `
//             console.log("Oh wow look at this:",sentence)
//         })

//         // Concatenate the new word onto buildMeUp

//         // Print buildMeUp to the console
//     }

// }

// // Invoke the function and pass in the array
// addExcitement(sentence)


// Create an array that contains the words in the sentence
let sentence1 = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
addExcitement = (theWordArray, punctuation) => {
    for (var index = 0; index <= theWordArray.length; index++) {
        if (index % 3 === 0 && index !== 0){
       theWordArray[index -1] += punctuation.repeat(index/3);

        }
        console.log(theWordArray.slice(0, index).join(" "));
    }
}
addExcitement(sentence1, "?");


