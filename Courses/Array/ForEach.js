{/*  ForEach Array is a print a Each element of array:*/}

const fruits= ['apple','banana','mango']

fruits.forEach(fruit=>console.log(fruit))

{/*using a foreach method sum of all the arrays*/}

const Numbers=[1,2,3,4,5]
var total=0;
Numbers.forEach(Num=>
    {  total += Num 
    }
);
console.log(total)


const DoubleNumbers=[]

Numbers.forEach(Num=>
    { DoubleNumbers.push(Num*2)
    }
);
console.log(DoubleNumbers);
