

let output = document.getElementById("Display");
function Display(num){
    output.value += num;
}

function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
        alert("invalid");
    }
    }

    function clearDisplay(){
        output.value = "";
    }
