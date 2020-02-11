function theBeatlesPlay(musicians, instruments){
//creates a function called theBeatlesPlay with two parameters:
//musician names and instruments they play
  
  const array = [];
  //declare a constant that is an empty array
  
  for (let i = 0 , m = musicians.length; i < m ; i++){
  //create an index counter to help iterate through the array
    array.push(`${musicians[i]} plays ${instruments[i]}`);
    //Using the .push method to add a string which contains the musician
    //and the instrument they play
  }
  
  return array;
}

function johnLennonFacts(facts){
//creates a function called johnLennonFacts with one parameter:
//a string of facts
  
  const array = [];
  //declare a constant that is an empty array
  
  let i = 0;
  //creating a counter through using a local variable i
  
  while (i < facts.length){
  //using a while loop means that if the conditional is true
  //which means that if the value of i is less than the Number
  //of facts, then the following will happen.
    
    array.push(`${facts[i]}!!!`);
    i++;
    //Using .push adds this element, which is currently a string,
    //to the end of the array. After which 1 is added to the local
    //variable. 
  }
  
  return array;
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}