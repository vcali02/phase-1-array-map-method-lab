const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//function titleCased
//returns title case tutorial names
//NO ARGUMENTS
//iterate through tutorials array
//ACCESS EACH INDIVIDUAL WORD
const  titleCased = () => tutorials.map( sentence => {
  const splitSentence = sentence.split(" ")

    console.log(splitSentence)
    const capsCase = splitSentence.map(word =>
    word[0].toUpperCase() + word.slice(1)
    )
    console.log(capsCase)
    const completedCaps = capsCase.join(' ')

    return completedCaps
  }
  )


    
titleCased()




// const titleCased = () =>  tutorials.map(sentence => {
//   const splitSentences = sentence.split(' ')
//   //declare new constant
//   const wordsCaps = splitSentences.map( word => 
//     word[0].toUpperCase() + word.slice(1)
//     )
//   //map through constant
//   //grab the 1st element in array, set to uppercase
//   //slice rest off of array
//   const completedCaps = wordsCaps.join(' ')
  
//   return completedCaps
// })

//console.log(titleCased)

  // function capitalizeWords(arrayParam) {
  //   return arrayParam.map((element) => {
  //     const capitalizedFirst = element.charAt(0).toUpperCase();
  //     const rest = element.slice(1).toLowerCase();
  //     return capitalizedFirst + rest;  
  //   });
  

//const wordsCaps = 
// function capitalizeWords(arrayParam) {
//   return arrayParam.map((element) => {
//     const grabElementZero = element[0].split(" ")
//     console.log(grabElementZero)
//     // const capitalizedFirst = element.charAt(0).toUpperCase();
//     // const rest = element.slice(1).toLowerCase();
//     // return capitalizedFirst + rest;  
//   });
// }

  //console.log(capitalizeWords(grabElementZero))



//1. H"iterate" through individual words in a string?

//access the first element of the array
// splits where there are SPACES, "w" would split where there are "w"

//const indivWords = tutorials[0].split(" ") // OPTION: const separateWords = indivWords.split(" ")
//access the first element of the new array
//const firstLetterCaps = indivWords[0][0].toUpperCase()


 
// // const newArray = [...grabElementZero]
// // console.log(newArray)

// function capsWords(param) {
//   for (let i = 1; i < tutorials.length; i++) {
//     let eachSentence = tutorials[i].split(" ")
//     //console.log(eachSentence)
//   }
//   console.log(capsWords(tutorials[1]))
// }




/******THIS WORKED****/
// const wordsCaps = function capitalizeWords(arrayParam) {
//   return arrayParam.map((element) => {
//     const capitalizedFirst = element.charAt(0).toUpperCase();
//     const rest = element.slice(1).toLowerCase();
//     return capitalizedFirst + rest;  
//   });
//


// const grabFirstWord = indivSentence[0]
// const grabFirstLetter = grabFirstWord.split("")
// const firstLetterCaps = grabFirstLetter.toUpperCase()





// function makeCaps(param1) {
//   let   indivSentence = param1[0]
//   console.log(indivSentence)
//     for (let i = 0; i < param1.length; i++) {
//       //const indivWords = param1[i].split(" ")
//       const grabFirstLetter  = indivSentence[i].split("") //.toUpperCase()
        
//      // const grabFirstLetter = indivWords.split("") 
//       //firstLetterCaps
      
//       return grabFirstLetter
      
//     }
    
//   }
  
  //console.log(makeCaps(tutorials))

//const separateWords = indivWords[0]
// //make that element upper case
// const separateLetters = separateWords[0].toUpperCase()






/**************TRIED, DIDN'T WORK: NO HIERARCHY***************/
// function individualizeWords(tutorialsParam) {
//   let   sentence= tutorials[0]
//   for (let i = 1; i < tutorialsParam.length; i++) {
//     const indivWords = sentence[0]
//     const currentWord= tutorialsParam[i]
//     if (currentWord[i] ){

//     }
//   }
// }



