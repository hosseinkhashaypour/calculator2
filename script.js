const result = document.querySelector(".result")

function addanswer(value){
    document.form1.calc.value += value
}

function delbtn(){
    document.form1.calc.value = ''
}

function evalbtn(){
    document.form1.calc.value = eval(form1.calc.value)
}
