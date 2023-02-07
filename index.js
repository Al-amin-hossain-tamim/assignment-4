
//------------ problem-1 -------------- 

// this function will take  a number input it will multiply,add,divide and subtracts it, then return it

function mindGame(number){
    if(typeof number !=='number'){
        return 'please enter a number';
    }
    const multiplication = number * 3 ;
    const add = multiplication + 10;
    const divide = add / 2 ;
    const subtruction = divide - 5 ;
    return subtruction ;
}



// --------------- problem-2 -------------------

// this function takes a string as input and returns even if its length is equal and odd otherwise.

function evenOdd(surah){
    if(typeof surah !=='string'){
        return 'please enter a string';
    }
   if(surah.length % 2 ==0){
    return 'even' ;
   }
   else{
    return 'odd';
   }
}


// ------------ problem-3 ---------------

// this function takes input a number and subtracts 7 from that number. If the subtruction is less than 7,it returns that number.If it is equal to or greater than 7,it returns the square root of the input.

function isLGSeven(number){
    if(typeof number !=='number'){
        return 'please enter a number';
    }
    const substruction = number - 7;
    if(substruction<7){
        return substruction;
    }
    else if(substruction >= 7){
        const  number2 = number *2;
        return number2 ;
    }
}




// ------------ problem-4 -----------------

// this function will take an array input and show the length of the negative values in that array.


function findingBadData(ages){
  let count = 0;
  for(let i = 0;i<ages.length;i++){
    const element = ages[i];
    if(element<0){
        count++;
    }
  }
  return count;

}

// --------------- problem-5  -------------------

// this function takes three number as input parameters and then multiplies the three input parameters with three different numbers and adds the product of the three.Subtructing two thousand from the result will return the minus result.


function gemsToDiamond(num1,num2,num3){
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !=='number'){
        return 'please enter a number'
    }
    const num1Multiplication = num1 * 21 ;
    const num2Multiplication = num2 * 32;
    const num3Multiplication = num3 * 43;
    const totalMultiplication = num1Multiplication + num2Multiplication + num3Multiplication ;
    if(totalMultiplication <1000*2){
        return totalMultiplication ;
    }
    else if(totalMultiplication >= 1000*2){
        return totalMultiplication - 2000;
    }
}

