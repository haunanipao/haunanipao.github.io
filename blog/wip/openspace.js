


function sayHi () {
  return 'hi'
  }
  
  function sayGoodbye () {
  return 'ttfn'
  }
  
  
  function greet () {
  
  return 'Hey there!'
  }
  let salutation = greet()
  
  function shout (message) {
    return message
  }
  
  let replyResult = shout (hi)
  
  function warn (something) {
    let valueToBeReturned = something + ' ' + something
    console.log (valueToBeReturned)
    return valueToBeReturned
  }
  
  let me = {
    name: "Lunabelle",
    eyeColour: "brown",
    children: ["Mum", "Ginger", "Caramel"],
    partner: "Narg"
  }
  
  console.log(me)
  
  let favFood = ["pretzels","tatertots","coffee", "bananas" ]
  //                0           1         2           4
  
  favFood [2] = "rice"
  console.log (favFood[2])
  favFood.push ("eggs")
  console.log (favFood)
  console.log (favFood.length)
  
  //conditionals
  
  let something = false
  if (something) {
    console.log("I'm true!")
  } else {
      console.log("I'm false!")
    }
  
    // Write your code below this line
  function greetings (string) {
    if (string == 'Te Reo') {
        return 'Kia ora'
    } else if (string == 'English') {
        return 'Hello'
    } else {
        return 'Friendly wave'
    }
  }
  
  greetings ('Kia Ora')
  greetings ('Hi')
  greetings ('👋')
  
  // Write your code below this line
  function chooseGreetingLanguage (string) {
    if (string == 'Te Reo') {
        return 'Kia ora'
    } else if (string == 'English') {
        return 'Hello'
    } else if (string == 'Spanish') {
        return 'Hola'
    } else if (string == 'Samoan') {
        return 'Talofa'
    } else {
        return 'Friendly wave'
    }
  }
  
  chooseGreetingLanguage ('Te Reo')
  chooseGreetingLanguage ('English')
  chooseGreetingLanguage ('Spanish')
  chooseGreetingLanguage ('Samoan')
  chooseGreetingLanguage ('👋')
  
  function chooseGreetingLanguage(language) {
    switch (language) {
        case 'Te Reo':
            return 'Kia ora'
        case 'English':
            return 'Hello'
        case 'Spanish':
            return 'Hola'
        case 'Samoan':
            return 'Talofa'
        default:
            return 'Friendly wave'
    }
  }
  
  function isSignedIn (boolean) {
    return (boolean ? 'Log Out' : 'Log In')
  }
  
  isSignedIn (true)
  isSignedIn (false)
  
  Operators
  
  function and(bool1, bool2) {
    return (bool1 && bool2)
  }
  
  // Loops - happens until the conditions change
  // iterator - how many times i've been through the loop
  // condition - while the condition holds true
  // cycle complete and interate
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(numbers)
  for (let i = 0; i < numbers.length; i++) {
    return [i]++
  }
  console.log(numbers)
  
  
  // Write your code below this line
  let names = ['Sally', 'Nikita', 'Arnav', 'Akira']
  function logNames(names) {
      for (let i = 0; i < names.length; i++) {
          console.log(names[i]) 
          
      }
  }
  
  // Write your code below this line
  let countdown = ['blast off', 'one', 'two', 'three']
  function printCountdown(countdown) {
      
      for (let i = countdown.length-1; 0 <= i ; i--) {
          console.log(countdown[i] + '!') 
          
      }
  }
  
  // stretch
  // Write your code below this line
// Write your code below this line
let petnames = ['Sally', 'John', 'James', 'Alice', 'Sue']

function countShortNames (petnames) {
    let count = 0;
    for (let element of petnames) {
        if (element.length < 5) {
           count++
        }
        
    }
   return count
}

let greeting = ['Kia Ora', 'Aloha', 'Hallo', 'Annyeonghaseyo', 'Hi', '👋']

  let TheHU = ['Gala','Jaya','Enkush','Temka']
  function folkRock(TheHU) {
      for (let i = 0; i < TheHU.length; i++) {
          console.log(The-HU[i]) 
          
      }
      return console.log('Mongolian Folk Heavy Metal 🤟🏽')
  }