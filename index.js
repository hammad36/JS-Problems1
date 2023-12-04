// fizzBazz algorithm

console.log(fizzBazz(9));

function fizzBazz(input){
    if (typeof input !== 'number') 
        return NaN;
    else if (input%5 ===0 && input%3 ===0) 
        return 'fizzBuzz';
    else if(input%3 ===0) 
        return 'fizz';
    else if (input%5 ===0) 
        return 'Buzz';
    else 
        return input;
}


// ----------------------------
//Demerit points

let mySpeed=70;
console.log(checkSpeed(mySpeed));

function checkSpeed(speed){
    let speedLimit = 70;
    let KmPerPoint =5;
    let points = Math.floor((speed-speedLimit)/KmPerPoint);
    if(points>=12)
        return 'Licensece Suspended';
    else if (points<=0)
        return 'your are OK';
    return points + ' points';
}



//------------------------------
//Even and odd numbers

let myNumber =13;
console.log(showNumbers(myNumber))

function showNumbers(myNumber){
    for(let i=0 ;i<=myNumber ;i++){
        const message=(i%2 === 0)?'Even':'ODD';
        console.log(i,message)
    }
}

//-------------------------------
//Count Truthy

let array =[1,2,3,4,5,0,0,0,0,0,''];
console.log(countTruthy(array));
function countTruthy(array){
    let count=0;
    for(let value of array)
        if(value)
            count++;
        return count;
}

//---------------------------------
//String properties

const movie ={
    title:'a',
    releaseYear:2024,
    rating: 4.5,
    director:'b'
};

console.log(showProperties(movie));

function showProperties(objecteee){
    for(let key in objecteee){
        if(typeof objecteee[key] === 'string')
        console.log(key, objecteee[key]);
    }
}

//-------------------------------------
//sum of muliples of 3 and 5

let limit=10;

console.log(sum(limit))

function sum(limit){
    let sum=0
    for(let i=0 ; i<=limit ; i++){
        if(i % 3 ===0 || i%5===0)
            sum +=i;
    }
    return sum;
}

//-------------------------------------
//Grade
const marks=[80, 80,50];

console.log(calculateGrade(marks))

function calculateGrade(marks){
    const average=calculateAverage(marks);

    if(average<60)  return'F';
    if(average<70)  return'D';
    if(average<80)  return'C';
    if(average<90)  return'B';
    if(average<=100)  return'A';
}

function calculateAverage(array){
    let sum=0;
    for(let value of array)
    sum +=value;
    return average =sum/array.length
}

//-----------------------------------
//show stars

showStarts(3);
function showStarts(rows){
    for(let i =0;i<rows;i++){
        console.log('');
        for(let x=0;x<=i;x++)
        console.log('*');
    }
}

//-------------------------------------
//Prime Numbers

showPrimes(30);

function showPrimes(limit){
    for(let number=2 ; number<=limit; number++)
        if (isPrime(number)) console.log(number);  
}

function isPrime(number){
    for(let factor=2; factor<number; factor++)
        if(number % factor === 0 )
            return false;

    return true;
}