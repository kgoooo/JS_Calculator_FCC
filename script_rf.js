var equation = ''
var answer = ''
// clear button resets equation and updates display
$('#clear').on('click', () => {
	equation = ''
	update()
})
// removes last character from equation and updates display
$('#delete').on('click', () => {
	equation = equation.substr(0, equation.length-1)
	update();
})
// for all the numerical and operator buttons to add characters to equation
$('.btn').on('click', () => {
	equation += event.target.id
	update();
})
// computes equation.  returns error if = is pressed w/o anything else.
$('#equals').on('click', () => {
	if (equation === '') {
	$('#display').text('error')	
	};
	answer = math.eval(equation);	
	$('#display').text(answer)	
	equation = answer;
})
//updates the display
const update = () => {
	$('#display').text(`${equation}`)
}