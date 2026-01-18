let display = document.getElementById("display");
let expression = "";

function number(num){
expression += num;
document.getElementById('display').value = expression;
}

function operator(op){
expression += op;
document.getElementById('display').value = expression;
}

function clearD(){
    expression = " ";
    document.getElementById('display').value = " ";
}

function result(){
    try{
        expression = eval(expression);
        document.getElementById('display').value = expression;
    }catch(error){
        document.getElementById('display').value = "Error";
    }
}