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

  // Functions
// Defining functions
function login(username, password) {
  if (username == 'ellaquintin' && password =='1234') {
    return 'User is logged in!';
  } else if (username != 'ellaquintin') {
    return 'Invalid username!';
  } else if (password != '1234') {
    return 'Invalid password!';
  } else {
    return 'Invalid username or password!';
  }
}
// Invoking functions
login('ellaquintin', '1234');


// Basic Arithemetic
12 + 34;
45 - 16;
7 * 12;
78 / 4;
78 % 4;

// comparison operators
2 === 2;
3 !== 2;
3 !== 3;

// Built in Math functions
Math.round(37/24);
Math.floor(37/24);
Math.ceil(37/24);
Math.random();
Math.max(78, 12, 98, 14, 89)

Math.ceil(Math.random() * 1000000);

// Order of opeartions
1 * 2 + 3 - 4 / 2 + 2**2;

// Handling user inputs
1200 + '250';
1200 + Number('250');

// String concatenation
const firstname = 'Ella'
const lastname = 'Quintin';
firstname + ' ' + lastname;
// firstname. trim() + ' ' + lastname,trim();

// Template literal
`${firstname.trim()} ${lastname.trim()}`;

// String methods
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
(firstname + ' ' + lastname).length;
firstname.toUpperCase();
lastname.charAt(0);

`${firstname.trim()} ${lastname.trim()}`.charAt(0);
`${firstname.trim().charAt(0)}${lastname.trim().charAt(0)}`;



























  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  