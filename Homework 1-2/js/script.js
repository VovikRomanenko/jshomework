var part = prompt('part 1 or 2 ?');

if(part == 1){
  var number = prompt('Your number - ');

  var exponent = prompt('Exponent - ');

  function myPoW(a, b) {
    var sum = 1;
    for (var i = 0; i < b; i++) {
      sum *= a;
    }
    return sum;
  }

  if (exponent < 1) {
    alert('Error, Exponent < 1, ' +
      'Exponent = ' + exponent
    );
  } else {
    alert( myPoW(number ,exponent) );
  };
}else{
  var arr = [];

  for (var i = 0; i < 5; i++) {
      arr[i] =  prompt('Names:');
  }

  var user = prompt('Your name?');

  var x;
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    if (user == arr[i]) {
      x = true;
    }
  }

  if (x == true){
    alert('Hello, ' + user);
  }else{
    alert('Good bye');
  }
}
