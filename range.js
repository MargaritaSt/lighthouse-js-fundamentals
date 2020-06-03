function range(start, end, step) {
  let array = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0){
    array = [];
    console.log("Empty Array");
  }
  else {
    for (let st = start; st <= end; st = st + step){
      array.push(st);
      //console.log(array[i]);
      //i++;
   }
  }
  console.log(array)
  return array;
}

range (0,8,2)
range (-9,3,3)
