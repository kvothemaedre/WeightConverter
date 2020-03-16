document.querySelector('#lbsInput').addEventListener('input',function(e){
	let lbs = e.target.value;
	document.querySelector('#gramsOutput').innerHTML = lbs/0.0022;
	document.querySelector('#kilogramsOutput').innerHTML = lbs*0.453592;
	document.querySelector('#ouncesOutput').innerHTML = lbs*16;
});

