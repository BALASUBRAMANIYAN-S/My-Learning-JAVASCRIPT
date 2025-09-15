// To find a Even numbers
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let FindNumber = number.filter((number) => number % 2 === 0);
console.log(FindNumber);
// filter a Data  
const people = [
  { NAME: "Bala", AGE: 18, CITY: "Chennai" },
  { NAME: "Arun", AGE: 23, CITY: "Bangalore" },
  { NAME: "Priya", AGE: 22, CITY: "Hyderabad" },
  { NAME: "Karthik", AGE: 19, CITY: "Mumbai" },
  { NAME: "Divya", AGE: 20, CITY: "Pune" },
];

const eligible = people.filter((value) => (value.AGE>=20));
eligible.map((v)=>{
console.log(v);})

//filter a Above 4 letter 

const data = ["Chennai" ,"Bangalore","Hyderabad","Mumbai","Pune" ]

const finalData= data.filter((D)=>D.length>5)
finalData.map((DATA)=>{
    console.log(DATA);
    
})