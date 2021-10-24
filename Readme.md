#Base converter

This tool helps you convert the number system from one to another.
You should specify from which base to convert and from which one.

currently it only supports Decimal and Binary number systems.

further updates later..


#Test code

// function baseSetup(event, selectedIndex) {
// 	event.preventDefault();
// 	let currentBase1 = event.target.id, currentBase2 = (currentBase1 === 'baseFrom') ? 'baseTo' : 'baseFrom';
// 		// swaps the other value if same convertion choosed
// 	if (id(currentBase1).value === id(currentBase2).value) {
// 		id(currentBase2).selectedIndex = id(currentBase2).selectedIndex+1;
// 		//(id(currentBase2).selectedIndex < id(currentBase2).selectedIndex) ? 1 : -1;
// 		baseValue.value = ''; // reset entered val
// 		console.log('swapped!');
// 	}
// 	// show placeholder accordingly
// 	baseValue.placeholder = baseFrom.value ? `${baseFrom.value} only..` : '';
// }