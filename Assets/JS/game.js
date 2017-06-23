//choosing a random word//
//create an array of words//
var titleDiv = document.getElementById("title");
    titleDiv.innerHTML = "Press any key to begin!";

var questionDiv = document.getElementById("question");
    questionDiv.innerHTML = "Think very hard before you guess!";

var words = [ 
              "laura",
              "dale",
              "cooper",
              "leo",
              "bobby",
              "ronette",
              "shelly",
              "diner", 
              "leland", 
              "new-shoes",
              "huckleberry", 
              "donna",
              "james",
              "harold",
              "orchid", 
              "audrey",
              "harry", 
              "diane", 
              "truck",
              "gun", 
              "lucy", 
              "bob", 
              "norwegians", 
              "blackie", 
              "roadhouse", 
              "tibet",
              "donuts",
              "norma",
              "coffee", 
              "doppleganger",
              "josie"];
 

var word = words[Math.floor(Math.random() * words.length)];
    
console.log(word)


var answerArray = [];
for(var i = 0; i < word.length; i++) {
  answerArray[i] = "_ ";
  
}
    //answerArray = ;
console.log(answerArray)
    underlines.innerHTML = answerArray.join('');
  // display answerArray
function check (letter){

        var arrWord = word.split('');
        var indexes = [];
        for (var i = 0; i < arrWord.length; i++) {
          

          if(letter== arrWord[i] ){

            //console.log( "letter matches at index " + i)
            indexes.push(i);
          } else {

           // console.log('looser')
          }
        }


          console.log(indexes)
         //answerArray =  answerArray.split(" ");
          for (var i = 0; i < indexes.length; i++) {
                console.log(indexes[i])
           
   answerArray[indexes[i]] = letter;
          }
           
console.log(answerArray );
        underlines.innerHTML = answerArray.join('');
//          
         console.log(answerArray.join(''))
            var wordTolookUp = word.split('')

       if (letter.includes(word.split)){

             // ("youwin.gif");
            } else {
         
            }

  //create a variable to keep track of letters that are left to be guessed//

  


  //get a guess

}

document.onkeypress = function(event) {
  var userGuess = event.key;
  var remainingLetters = word.length;
  check(userGuess);

    //update game state with a guess//
    for (var j = 0; j < word.length; j++) { 
      if (word[j] === userGuess) {
        answerArray[j] = userGuess;    
      }

    }
      if (underlines.innerHTML === word) {

    
        setTimeout(function() {
            alert("You win! The answer was " + word + "."); 
        }, 500)
  }
}