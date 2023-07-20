
let btn = document.querySelector(".button");

btn.addEventListener("click", ageCalculator);

function ageCalculator() {
	let year = document.getElementById('year').value;
	let month = document.getElementById('month').value;
	let day = document.getElementById('day').value;
	
	
	if (year === '') {
		let alertYear = document.getElementById('alertYear');
		alertYear.innerHTML = 'This field is required';
		return; 
	} else if (month === '') {
		let alertMonth = document.getElementById('alertMonth');
		alertYear.innerHTML = 'This field is required';
	} else if (day === '') {
		let alertDay = document.getElementById('alertDay');
		alertYear.innerHTML = 'This field is required';
	}
	
	
	let actualDate = new Date();

	let birthDate = new Date(year, month - 1, day);

	let diff = actualDate - birthDate;

	let age = new Date(diff);

	let years = age.getUTCFullYear() - 1970;
	let months = age.getUTCMonth();
	let days = age.getUTCDate() - 1;
	
	let resYear = document.getElementById('resYear');
	let resMonth = document.getElementById('resMonth');
	let resDay = document.getElementById('resDay');
	
	resYear.innerHTML = years;
	resMonth.innerHTML = months;
	resDay.innerHTML = days;
}