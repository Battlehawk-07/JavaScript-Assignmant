// Declair Varibles and constants
const NAMEFIRST = document.getElementById('firstName');
const NAMELAST = document.getElementById('lastName');
//Bool
var blank = true;
// Wait for submit button to be pushed
//Event listener
document.getElementById('submit').addEventListener('click', submit);
function submit(event){
	// Cancel defult action
	event.preventDefault();
	// Check for empty fields
	checkForEmpty();
	// If none are empty:
	if (blank === false){
		// Do math
		var answer = math();
		report(answer);
	}
}

// Function to find empty fields
function checkForEmpty(){
	// giant IF ELSE
	if (NAMELAST.value === '' && NAMEFIRST.value === ''){
		blank = true;
		alert('First Name and Last Name input fields are empty!');
		NAMEFIRST.focus();
	}
	else if (NAMELAST.value === ''){
		blank = true;
		alert('Last Name input field is empty!');
		NAMELAST.focus();
	}
	else if (NAMEFIRST.value === ''){
		blank = true;
		alert('First Name input field is empty!');
		NAMEFIRST.focus();
	}
	else if (document.getElementById("email").value === ''){
		blank = true;
		alert('Email Field is empty!');
		document.getElementById("email").focus();
	}
	else if (document.getElementById("date").value === ''){
		blank = true;
		alert('Please enter date!');
		document.getElementById("date").focus();
	}
	else if (document.querySelector('input[name=usa]:checked') === null){
		blank = true;
		alert('Please Select Shipping');
	}
	else{
		blank = false;
	}
}

// Function that does math equation
function math(){
	//Array and varibles
	var checkbox = [0,0,0];
	var shirt1 = 0;
	var shirt2 = 0;
	var ship = 0;
	var tax = 1.08;
	if (document.getElementById('check1').checked == true){
		checkbox[0] = parseFloat(document.getElementById('check1').value);
	}
	if (document.getElementById('check2').checked == true){
		checkbox[1] = parseFloat(document.getElementById('check2').value);
	}
	if (document.getElementById('check3').checked == true){
		checkbox[2] = parseFloat(document.getElementById('check3').value);
	}
	// Arithmetic Operators
	shirt1 = document.getElementById('shirt1').value * 11.99;
	shirt2 = document.getElementById('shirt2').value * 15.99;
	ship = parseFloat(document.querySelector('input[name=usa]:checked').value);
	var answer = ((checkbox[0] + checkbox[1] + checkbox[2] + shirt1 + shirt2 + ship) * tax).toFixed(2);
	return answer;
}
document.getElementById("form").style.display = "none";
document.getElementById("report").style.display = "none";
function hideCheckout() {
  //LET	
  let x = document.getElementById("form");
  if (x.style.display === "none") {
    x.style.display = "block";
	document.getElementById("start").innerHTML = "Hide Checkout";
  } else {
    x.style.display = "none";
	document.getElementById("start").innerHTML = "Start Checkout";
  }
}

// Function to print out the order infomation
function report(answer) {
	document.getElementById("form").style.display = "none";
	document.getElementById("start").innerHTML = "Start Checkout";
	document.getElementById("report").style.display = "block";
	var firstName = NAMEFIRST.value;
	var lastName = NAMELAST.value;
	// concat() string method
	var namecon = firstName.concat(' ', lastName);
	var shipping = (document.querySelector('input[name=usa]:checked').value);
	var state = (document.getElementById('state').value);
	var email = (document.getElementById('email').value)
	var date = (document.getElementById('date').value)
	var check1 = 0;
	var check2 = 0;
	var check3 = 0;
	if (document.getElementById('check1').checked == true){
		check1 = parseFloat(document.getElementById('check1').value);
	}
	if (document.getElementById('check2').checked == true){
		check2 = parseFloat(document.getElementById('check2').value);
	}
	if (document.getElementById('check3').checked == true){
		check3 = parseFloat(document.getElementById('check3').value);
	}
	// change the html in all the <h3> tags to the details
	document.getElementById("total").innerHTML = "Order Total: $" + answer;
	document.getElementById("name").innerHTML = "Buyer's Name: " + namecon;
	document.getElementById("email1").innerHTML = "Buyer's Email: " + email;
	document.getElementById("date1").innerHTML = "Order Date: " + date;
	document.getElementById("shipping1").innerHTML = "Shipping Cost: " + shipping;
	document.getElementById("state1").innerHTML = "Buyer's State: " + state;
	document.getElementById("otherStuff").innerHTML = "Other Stuff: $" + (check1+check2+check3);
}