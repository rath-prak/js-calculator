var number = "";

function calculator(digit){

	//answer
	
	if(digit === "="){
		console.log(eval(number));
		$("#answer").val(eval(number));
	}

	else if(digit === "C"){
		location.reload();
	}
	else{
		number += digit;
		$("#answer").val(number);
	}

}

// "5 * 6" = 


	// else if(digit === "+"){
	// 	number += digit;
	// }

// $(document).ready(function(){


// });
