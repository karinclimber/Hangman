//choosing a random word//
//create an array of words//
var titleDiv = document.getElementById("title");
    titleDiv.innerHTML = "Press any key to begin!";

var questionDiv = document.getElementById("question");
    questionDiv.innerHTML = "Think very hard before you guess! (May contain spaces.)";


var words = [ 
              "Laura Palmer",
              "Dale Cooper",
              "Leo Johnson",
              "one armed man",
              "Doctor Jacoby",
              "Bobby Briggs",
              "Ronette Pulaski",
              "Shelly Johnson", 
              "Leland Palmer", 
              "huckleberry pie", 
              "Donna Hayward", 
              "Audrey Horne",
              "Black Lodge",
              "Red Room",
              "Harry Truman", 
              "Diane", 
              "douglas fir", 
              "Lucy", 
              "Bob", 
              "Norwegians", 
              "Twin Peaks", 
              "Blackie", 
              "Roadhouse", 
              "Tibet",
              "donuts",
              "Norma Jennings",
              "Gentleman Jim's",
              "noiseless drape runners",
              "Sometimes my arms bend back",
              "cotton balls",
              "coffee", 
              "Doppleganger",
              "One Eyed Jack's",
              "Packard Mill", 
              "Doctor Hayward",
              "Josie Packard"];
 

var word = words[Math.floor(Math.random() * words.length)];
    
console.log(word)


var answerArray = [];
for(var i = 0; i < word.length; i++) {
  answerArray[i] = "_ ";
  
}
    answerArray = answerArray.join('');
console.log(answerArray)
    underlines.innerHTML = answerArray;
  // display answerArray
function check (letter){

        var arrWord = word.split('');
        var indexes = [];
        for (var i = 0; i < arrWord.length; i++) {
          

          if( letter== arrWord[i] ){

            //console.log( "letter matches at index " + i)
            indexes.push(i);
          } else {

           // console.log('looser')
          }
        }


          console.log(indexes)
         answerArray =  answerArray.split(" ");
          for (var i = 0; i < indexes.length; i++) {
                
              answerArray[indexes[i]] = letter;

          }

    //       answerArray = answerArray.join('')
    //           underlines.innerHTML = "";
    //          underlines.innerHTML = answerArray;
    //      console.log(answerArray.join(''))
    // var wordTolookUp = word.split('')

    //   console.log(wordTolookUp)
    // console.log('your letter is ' +letter);

    // if(letter.includes(word.split)){

    //   console.log("YAY")
    // } else {
    //   console.log("Blah")
    // }

// }
    
  //create a variable to keep track of letters that are left to be guessed//

  var remainingLetters = word.length;

  //get a guess

  document.onkeypress = function(event) {
  var userGuess = event.key;
  check(userGuess);

    //update game state with a guess//
    for (var j = 0; j < word.length; j++) { 
      if (word[j] === userGuess) {
        answerArray[j] = userGuess;
        remainingLetters--;    
      }

    }

  }


el.innerHTML = answerArray.join(" ");
alert("You win! The answer was " + word + "."); 
}
    



// var el = document.getElementById("demo");
// el.innerHTML = answerArray;
// el.innerHTML = answerArray.join(" ");   


//the game LOOOP//
//a WHILE LOOP//

// while (remainingLetters > 0) {
//   //show play progress//
//   var el = document.getElementById("question");
//   console.log(el);
//     el.innerHTML = answerArray.join(" ");