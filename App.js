let inputBox = document.getElementById("input_box");
let checkButton =document.getElementById("check_button");
let textAttemps= document.getElementById("container_text2");
let control = document.getElementById("Control");
let count=0;
let wanted = parseInt((Math.random()*100)+1)
console.log(wanted);

inputBox.addEventListener("keyup", function (event) {
    if (event.code == "Enter" || event.code == "NumpadEnter") {
      checkedNumber();
    }
});//keyboard event
checkButton.addEventListener("click", checkedNumber);
    
function checkedNumber(){
    let num = inputBox.value;
    if (num<0 || num>100) alert("write number 1 to 100 please!!")
    count++;
    textAttemps.innerText=`Number of attemps : ${count}`;
    if(parseInt(num)===wanted){
        control.innerText="Congrats!!!!";
      
    }else if(parseInt(num)<wanted){
        control.innerText= "Higher please!";
    }else if(parseInt(num)>wanted){
        control.innerText="Lower please!";
    }
}

