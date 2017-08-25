var equation = ''
var answer = ''

$('#clear').on('click', () => {
	equation = ''
	update()
})
$('#delete').on('click', () => {
	equation = equation.substr(0, equation.length-1)
	update();
})
$('#divide').on('click', () => {
	equation += '/'
	update()	
})
$('#multiply').on('click', () => {
	equation += '*'	
	update()		
})
$('#nine').on('click', () => {
	equation += '9'
	update()		
})
$('#eight').on('click', () => {
	equation += '8'	
	update()		
})
$('#seven').on('click', () => {
	equation += '7'	
	update()		
})
$('#six').on('click', () => {
	equation += '6'
	update()	
})
$('#five').on('click', () => {
	equation += '5'	
	update()	
})
$('#four').on('click', () => {
	equation += '4'
	update()	
})
$('#three').on('click', () => {
	equation += '3'
	update()	
})
$('#two').on('click', () => {
	equation += '2'	
	update()
})
$('#one').on('click', () => {
	equation += '1'	
	update()
})
$('#zero').on('click', () => {
	equation += '0'	
	update()		
})
$('#plus').on('click', () => {
	equation += '+'
	update()		
})
$('#minus').on('click', () => {
	equation += '-'	
	update()		
})
$('#dot').on('click', () => {
	equation += '.'	
	update()		
})
$('#equals').on('click', () => {
	answer = math.eval(equation);	
	$('#display').text(answer)	
	console.log(math.eval(equation));
	equation = answer;
})

const update = () => {
	$('#display').text(`${equation}`)
}