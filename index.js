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
