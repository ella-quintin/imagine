const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt('Enter your full name.');
    document.getElementById('name').innerText = name;
}

// variables
const pi = 3.142;
let name = 'Emmanuella Quintin-Coffie';
let age = 22;
let present = false;
console.log(name);

// Objects 
const car = {
    numberPlate:'GR-345-24',
    model: 'Bentley',
    color: 'black',
    weight: 50,
    weightUnit: 'KG',
    owner: {
        name: 'Emmanuella Quintin-Coffie',
        driver: {
            name: 'Fiifi',
        }
    }
}
console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);
car = {
    model: 'Porche'
}
car.owner.driver.name = 'Elizabeth'
console.log(car.owner.driver.name);

// Arrays

const tweet1 = {
    test: 'I am learning js today.',
    likes: 5,
    shares: 2,
    retweet: 1,
  }
  
  const tweet2 = {
    test: 'I am learning js today.',
    likes: 60,
    shares: 8,
    retweet: 5,
  }
    
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.length;
  tweets[0];
  
  // Dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  // If/Else
  if (today.getHours() >=16) {
    console.log('class has ended!');
  } else {
      console.log('class is in session!');
    }
  
  // For loop
  for (let i = 0; i <=9; i++) {
    console.log('Notify friends!', i);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  