function One(value){
    let EnteredValue = value ;
    let InputValue = document.getElementById('calc-input').value ;
    document.getElementById('calc-input').value = InputValue + EnteredValue;
}

function Two(value){
    let EnteredValue = value ;
    let InputValue = document.getElementById('calc-input').value ;
    document.getElementById('calc-input').value = InputValue + EnteredValue;
}

function Three(value){
    let EnteredValue = value ;
    let InputValue = document.getElementById('calc-input').value ;
    document.getElementById('calc-input').value = InputValue + EnteredValue;
}

function Four(value){
    let EnteredValue = value ;
    let InputValue = document.getElementById('calc-input').value ;
    document.getElementById('calc-input').value = InputValue + EnteredValue;
}

function Five(value){
    let EnteredValue = value ;
    let InputValue = document.getElementById('calc-input').value ;
    document.getElementById('calc-input').value = InputValue + EnteredValue;
}

function Six(value){
    let EnteredValue = value ;
    let InputValue = document.getElementById('calc-input').value ;
    document.getElementById('calc-input').value = InputValue + EnteredValue;
}

function Seven(value){
    let EnteredValue = value ;
    let InputValue = document.getElementById('calc-input').value ;
    document.getElementById('calc-input').value = InputValue + EnteredValue;
}

function Eight(value){
    let EnteredValue = value ;
    let InputValue = document.getElementById('calc-input').value ;
    document.getElementById('calc-input').value = InputValue + EnteredValue;
}

function Nine(value){
    let EnteredValue = value ;
    let InputValue = document.getElementById('calc-input').value ;
    document.getElementById('calc-input').value = InputValue + EnteredValue;
}

function Zero(value){
    let InputValue = document.getElementById('calc-input').value ;
    
    if(InputValue == ''){
        return;
    }else{
        document.getElementById('calc-input').value = InputValue + value ;
    }
}

function Plus(value){
    let InputValue = document.getElementById('calc-input').value ;
    let LastElement = InputValue.slice(-1);
    if (LastElement == ''){
        return;
    }else if((LastElement == value) || (LastElement =="-")||(LastElement == "*") ||(LastElement == "/")){
        return;
    }else{
        document.getElementById('calc-input').value += value ;
    } 
}


function Min(value){
    let InputValue = document.getElementById('calc-input').value ;
    let LastElement = InputValue.slice(-1);
    if (LastElement == ''){
        return;
    }else if((LastElement == value) || (LastElement =="-")||(LastElement == "*") ||(LastElement == "/")){
        return;
    }else{
        document.getElementById('calc-input').value += value ;
    } 
}

function Mul(value){
    let InputValue = document.getElementById('calc-input').value ;
    let LastElement = InputValue.slice(-1);
    if (LastElement == ''){
        return;
    }else if((LastElement == value) || (LastElement =="-")||(LastElement == "*") ||(LastElement == "/")){
        return;
    }else{
        document.getElementById('calc-input').value += value ;
    } 
}

function Div(value){
    let InputValue = document.getElementById('calc-input').value ;
    let LastElement = InputValue.slice(-1);
    if (LastElement == ''){
        return;
    }else if((LastElement == value) || (LastElement =="-")||(LastElement == "*") ||(LastElement == "/")){
        return;
    }else{
        document.getElementById('calc-input').value += value ;
    } 
}

function Equal(){
    let InputValue = document.getElementById('calc-input').value ;
    if(InputValue == ''){
        return;
    }else{
        document.getElementById('calc-input').value = eval(InputValue);
    }
}

function Del(){
    let InputValue = document.getElementById('calc-input').value;
    document.getElementById('calc-input').value = InputValue.slice(0,-1);
}

function Clear(){
    document.getElementById('calc-input').value = ''
}