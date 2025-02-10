const display = document.getElementById("display");

function todisplay(input){
    display.value += input;
}
function cleardisplay(){
    display.value = " ";
}
function calculate(){
  //  display.value = eval(display.value); // cause error ==> ( 7+ )

    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }

}