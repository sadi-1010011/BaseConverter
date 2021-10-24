// BASIC FUNCTIONALITY

	// grab base setters from DOM
const baseFrom = id('baseFrom');
const baseTo = id('baseTo');
	// variables n defaults
let baseValue = id('baseValue');
let convertFrom = 'decimal';
let convertTo = 'binary';

	// main calculation function
function main() {
	id('baseValue').addEventListener('change', function() {
		// from n to of convertion, we only get convertible combi
		convertFrom = baseFrom.value;
		convertTo = baseTo.value;
		// invoke it
		let ans = convertBase(convertFrom, convertTo, Number(this.value));
		id('answer').textContent = `${ans.finalAnswer}`;
		// id('answer').textContent = `${ans.answerEquation} \n = ${ans.finalAnswer}`;
	});
	// show placeholder accordingly
	baseValue.placeholder = baseFrom.value === 'decimal' ? 'decimal only..' : 'binary only..';
}

	// calculation logic
function convertBase(from, to, val) {
	// console.log('from: ', from,', to: ', to,', val: ', val);
	let num = Number(val),
		b_from = from,
		b_to = to,
		answerVal = [],
		finalAnswer = 0,
		answerEquation = '';

	// decimal - binary
	if (b_from === 'decimal' && b_to === 'binary') {
		let remainderVal = 0;
		if(num === 0) answerVal.push(0); 
		// logic
		while (num > 0) {
			remainderVal = num % 2;
			answerEquation += (`steps: ${num} / 2 = `);
			num = Math.floor(num / 2);
			answerEquation += (`${num} -- ${remainderVal} \n`);
			answerVal.push(remainderVal);
		}
		console.log(answerEquation);
		// convert to string, reversed bcz Array.push
		answerVal.reverse().toString();
		finalAnswer = answerVal;
		return { finalAnswer: finalAnswer, answerEquation: answerEquation };
	}


	// binary - decimal
	if (b_from === 'binary' && b_to === 'decimal') {
		// check isBinary and claculate ansr simultaneously
		let j, allDigits = num.toString(), eachDigit = 0, numLength = allDigits.length-1, binaryExpo, stepAnswer = 0;
		// loop each digit
		for (j=0; j<allDigits.length; j++) { // is binary ?
			if (Number(allDigits.charAt(j)) > 1) return 'not binary';
			else {
				// logic goes here
				eachDigit = Number(allDigits.charAt(j));
				binaryExpo = numLength < 0 ? 0 : Math.pow(2, numLength);
				stepAnswer = (eachDigit * binaryExpo);
				numLength--;
				finalAnswer = stepAnswer + finalAnswer;
				answerEquation += (`steps: (${eachDigit} x 2^${numLength}) + `);
			}
		}
		console.log(answerEquation);
		return { finalAnswer: finalAnswer, answerEquation: answerEquation };
	}

}


	// set compatible convertion values
function baseSetup(event, selectedIndex) {
	event.preventDefault();
	let currentBase1 = event.target.id, currentBase2 = (currentBase1 === 'baseFrom') ? 'baseTo' : 'baseFrom';
		// swaps the other value if incompatible convertion choosed
	if (id(currentBase1).value === 'binary') {
		id(currentBase2).value = 'decimal';
		baseValue.value = ''; // reset entered val
		// console.log('swapped!');
	}
	else {
		id(currentBase2).value = 'binary';
		baseValue.value = ''; // reset entered val
		// console.log('swapped!');
	}
	// show placeholder accordingly
	baseValue.placeholder = baseFrom.value === 'decimal' ? 'decimal only..' : 'binary only..';
}


// HELPER FN's

function id(__) { return document.getElementById(__); }

// run when contents loaded fully
window.addEventListener('load', main);