const numbers= [1,2,3,4,5,6,7,8,9]

const Square = numbers.map((value)=>{
return Math.sqrt(value).toFixed(2)
})

console.table(Square)