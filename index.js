// fizzBazz algorithm
console.log(fizzBazz('mo'));

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