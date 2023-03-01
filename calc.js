function One(value){
    document.getElementById('calc-input').value += value;
}

function Two(value){
    document.getElementById('calc-input').value += value;
}

function Three(value){
    document.getElementById('calc-input').value += value;
}

function Four(value){
    document.getElementById('calc-input').value += value;
}

function Five(value){
    document.getElementById('calc-input').value += value;
}

function Six(value){
    document.getElementById('calc-input').value += value;
}

function Seven(value){
    document.getElementById('calc-input').value += value;
}

function Eight(value){
    document.getElementById('calc-input').value += value;
}

function Nine(value){
    document.getElementById('calc-input').value += value;
}

function Zero(value){
    InputValue = document.getElementById('calc-input').value;
    if(InputValue == ''){
        return;
    }else{
        document.getElementById('calc-input').value += value;
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
    }else if((LastElement == value) || (LastElement =="+")||(LastElement == "*") ||(LastElement == "/")){
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