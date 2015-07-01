var a = [1, 2, 3, 4, 5];

function prime_number(arr){
	return arr.filter(function (x) {
		var k = Math.sqrt(x);
		for (var i = 2; i <= k; i++){
			if(x % i == 0){
				return false;
			}
		}
		return true;
	});
}

var b = prime_number(a);

console.log(b);