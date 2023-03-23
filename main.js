let userName = 'Kon' ;

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'Am I stupid?'

console.log(`${userName} asked - ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

let eightBall = '' ;
switch (randomNumber) {
case randomNumer = 0 : 
  eightBall = 'It is certain'
  break;
case randomNumer = 1 : 
  eightBall ='It is decidedly so'
  break;
case randomNumer = 2 : 
  eightBall = 'Reply hazy try again'
  break;
case randomNumer = 3 : 
  eightBall ='Cannot predict now'
  break;
case randomNumer = 4 : 
  eightBall = 'Do not count on it'
  break;
case randomNumer = 5 : 
  eightBall ='My sources say no'
  break;
case randomNumer = 0 : 
  eightBall = 'Outlook not so good'
  break;
}

console.log(`The Magic Eightball says: ${eightBall}`);



