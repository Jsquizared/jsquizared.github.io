
// with two slashes this is all commented out
//  have to have matching brackets i/e {}, () - they have to match can't be open
//when the page loads

function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	if (firstName == 'general' && lastName != 'assembly' )
	{
		console.log ('Welcome General')}

		else {
			console.log('you arent the general'
				)
		}




	// var fullName = firstName + ' ' + lastName;
	// console.log('user is called ' + fullName);

	// $('h2').text ('Hello' + fullName); 



	var userAge = prompt ('How old are you?');
	userAge = parseInt(userAge);

	if (userAge >= 18) {
	console.log ('User is an adult');
	 }

	else if (userAge >=13) {
	console.log('User is a teenager');

	} else {
	console.log ('go away child');
	}

}


$(function() {

	$ ('img').on ('click', askQuestions); 

//Hide all the sections
$('h3').next().hide();

//when the user clicks a h3 element
$('h3').on('click',function(){

//hide the next element
$(this).next().slideToggle(1000); 

});

});