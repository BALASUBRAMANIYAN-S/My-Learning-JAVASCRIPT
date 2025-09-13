{/*  ForEach Array is a print a Each element of array:*/}

const fruits= ['apple','banana','mango']

fruits.forEach(fruit=>console.log(fruit))

{/*using a foreach method sum of all the arrays*/}

const Numbers=[1,2,3,4,5,6,7,8,9,10]
var total=0;
Numbers.forEach(Num=>
    {  total += Num 
    }
);
console.log(total)


const DoubleNumbers=[1,2,3,4,5]

DoubleNumbers.forEach(Num=>
    { DoubleNumbers.push(Num*2)
    }
);
console.log(DoubleNumbers);
