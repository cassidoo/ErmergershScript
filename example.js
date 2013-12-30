var input = document.getElementsByClassName('ermergersh')[0];
var output = document.getElementsByClassName('javascript')[0];
var body = document.body;

input.addEventListener('keyup', function()
{
    output.value = main(input.value);
}); 

function runParse()
{
    output.value = main(input.value);
}