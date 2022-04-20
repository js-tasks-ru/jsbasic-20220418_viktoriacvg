function factorial (n) {
  let result = 1; 
  while (n) {
     console.log (`факториал от ${n}`)
      result=result*(n--);
}
  console.log(result);
  return result;
}
alert(factorial (5));