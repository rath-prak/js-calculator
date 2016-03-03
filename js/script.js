var displayBox = document.getElementById("display_answer");

function buttonValue(keyValue){
	displayBox.value += keyValue;

	if (keyValue == "CLEAR"){
		displayBox.value = '';
	}

}

function answer (){
	var sum = displayBox.value;
	sum = eval(sum);
	displayBox.value = sum;

}



















/* 1. var displayBox = document.getElementById("display_answer");
   - This basically declares a variable where we can access the HTML elements, grab the values from the 
   buttons and stores them in the variable. 
   
   2. Create a function that takes the values from the button and displays it when a button is clicked. 

   displayBox.value = key;
	
	this function basically takes value of button and returns it to buttonValue, then appends it to 
	the displayBox

	The 'value' property assigns a value of the variable or attribute. Here the value of displaybox is equals
	'keyValue'. 

	The '+=' is used to add new values to the string without deleting the previous values. i.e. add values 
	continuouly. 

	3. When the 'clear' button is clicked, the textbox should reset. This is done by assigning the value of 
	the 'displayBox' to an empty string. e.g. displayBox.value = '';

	4. Declare the 'answer()' function, use 'eval()' to do the maths. 


*/


