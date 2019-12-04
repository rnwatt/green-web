
document.getElementById("form1").onsubmit=function() {

	   if(document.querySelector('input[name = "car"]:checked') &&  document.querySelector('input[name = "meat"]:checked') && document.querySelector('input[name = "recycle"]:checked') && document.querySelector('input[name = "paper"]:checked') && document.querySelector('input[name = "metal"]:checked') && document.querySelector('input[name = "energy"]:checked') && document.querySelector('input[name = "power"]:checked') && document.querySelector('input[name = "purchase"]:checked') && document.querySelector('input[name = "beauty"]:checked') && document.querySelector('input[name = "foodSource"]:checked')){

	   	car = parseInt(document.querySelector('input[name = "car"]:checked').value);

	  	meat = parseInt(document.querySelector('input[name = "meat"]:checked').value);

	  	recycle = parseInt(document.querySelector('input[name = "recycle"]:checked').value);

		 	paper = parseInt(document.querySelector('input[name = "paper"]:checked').value);

		  metal = parseInt(document.querySelector('input[name = "metal"]:checked').value);

			energy = parseInt(document.querySelector('input[name = "energy"]:checked').value);

		  beauty = parseInt(document.querySelector('input[name = "beauty"]:checked').value);

			power = parseInt(document.querySelector('input[name = "power"]:checked').value);

			purchase = parseInt(document.querySelector('input[name = "purchase"]:checked').value);

			foodSource = parseInt(document.querySelector('input[name = "foodSource"]:checked').value);

	   total = car + meat + recycle + paper + metal + energy + power + purchase + beauty + foodSource;


	   document.getElementById("answer").innerHTML = total;

	   if(total < 11) {
document.getElementById("answer2").innerHTML = "You are environmentally friendly!";
}

   if(total >=11 && total < 50) {
document.getElementById("answer2").innerHTML = "You look after the environment although there is still improvement to make! Try to recycle as much as you can, plastics, tin cans and scrap paper.";
}

	if(total >=50) {
document.getElementById("answer2").innerHTML = "You need to change your habits as you have a bad carbon footprint.";
}
}

else {
alert("Fill out all questions before submitting.");
}

	   return false; // required to not refresh the page; just leave this here
	   }// end the submit function
