let input = document.getElementById('inputBox');

let buttons = document.querySelectorAll('button');

let string = '';

let operation = (event) =>{
  if(event.target.innerHTML == '='){
    string = eval(string);
    input.value = string;
  }
  else if (event.target.innerHTML == 'AC'){
    string="";
    input.value = string;
  }
  else if(event.target.innerHTML == 'DEL'){
    string = string.substring(0, string.length-1);
    input.value = string;
  }

  else{
    string += event.target.innerHTML;
    input.value = string;
  }
} 

let arr = Array.from(buttons);

arr.forEach(button =>{
  button.addEventListener('click', operation);
})