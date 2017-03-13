
exports.getPrimes = function (limit) {

  var primeNumbers = [];
  if ((limit === null) || (limit === undefined)){
    return "Empty Array";
  }
  if ((limit) <= 0) {
    return "Invalid input";
  }
  else if (isNaN(limit)){
  	return "Invalid input";
  }
  
for (var counter = 2; counter <= limit; counter++) {

    var Prime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            Prime = true;
        }
    }
    if (Prime === false) {
      primeNumbers.push(counter);
                
    }
}
return(primeNumbers);
}