const user = {
  name: "BALA",
  // address:{
  //     City:"Thanthani"
  // }
};

console.log(user.address && user.address.City);

console.log(user.address ? user.address.City : undefined);

console.log(user.address?.City); //OptionalChaining method for prevent a Error & show a Undefined
