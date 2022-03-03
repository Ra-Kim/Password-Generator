let secondRandom = 0;
let passwordChars = 0;
let str = ""
let passwordArray = [
     passwordDisplay1 = document.getElementById("password-display1"),
     passwordDisplay2 = document.getElementById("password-display2"),
     passwordDisplay3 = document.getElementById("password-display3"),
     passwordDisplay4 = document.getElementById("password-display4")
]

const uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
 "v", "w", "x", "y", "z"]
const numbers = [1,2,3,4,5,6,7,8,9,0]
const characters = ["!","@","#","$","%","&","*","(",")",]

function displayPasswords(){

    for(let i = 0; i < passwordArray.length; i++){
        passwordArray[i].textContent = ""
        passwordArray[i].textContent += loop()
        str = ""
        passwordArray[i].style.color = "#55F991";
        passwordArray[i].style.fontSize = "medium";
    }
}
        

function generatePassword(){
    for(let i = 0; i < 12; i++){
        passwordChars = (passwordGen(randomGen()))
    }
    return passwordChars
}

function loop(){
    for(let i = 0; i<12; i++){
     str +=    generatePassword()
    }
    return str
}


function randomGen(){
    let firstRandom = Math.floor(Math.random() * 4)
    return firstRandom
    
}

function passwordGen(x){
    if(x == 0){
        secondRandom = Math.floor(Math.random() * 26)
        return uppercase[secondRandom]
    }else if (x == 1){
        secondRandom = Math.floor(Math.random() * 26)
        return lowercase[secondRandom]
    } else if ( x == 2){
        secondRandom = Math.floor(Math.random() * 10)
        return numbers[secondRandom]
    } else if( x == 3){
        secondRandom = Math.floor(Math.random() * 9)
        return characters[secondRandom]
    }

}
function getId(btn){
 let elementID = btn
 console.log(elementID)
 return String(elementID)
}

function copyToClipboard1() {

    // Create a "hidden" input
    var aux = document.createElement("input");
  
    // Assign it the value of the specified element
    aux.setAttribute("value", passwordDisplay1.innerHTML);
  
    // Append it to the body
    document.body.appendChild(aux);
  
    // Highlight its content
    aux.select();
  
    // Copy the highlighted text
    document.execCommand("copy");
  
    // Remove it from the body
    document.body.removeChild(aux);
  
  }
  function copyToClipboard2() {

    // Create a "hidden" input
    var aux = document.createElement("input");
  
    // Assign it the value of the specified element
    aux.setAttribute("value", passwordDisplay2.innerHTML);
  
    // Append it to the body
    document.body.appendChild(aux);
  
    // Highlight its content
    aux.select();
  
    // Copy the highlighted text
    document.execCommand("copy");
  
    // Remove it from the body
    document.body.removeChild(aux);
  
  }

  function copyToClipboard3() {

    // Create a "hidden" input
    var aux = document.createElement("input");
  
    // Assign it the value of the specified element
    aux.setAttribute("value", passwordDisplay3.innerHTML);
  
    // Append it to the body
    document.body.appendChild(aux);
  
    // Highlight its content
    aux.select();
  
    // Copy the highlighted text
    document.execCommand("copy");
  
    // Remove it from the body
    document.body.removeChild(aux);
  
  }
  function copyToClipboard4() {

    // Create a "hidden" input
    var aux = document.createElement("input");
  
    // Assign it the value of the specified element
    aux.setAttribute("value", passwordDisplay4.innerHTML);
  
    // Append it to the body
    document.body.appendChild(aux);
  
    // Highlight its content
    aux.select();
  
    // Copy the highlighted text
    document.execCommand("copy");
  
    // Remove it from the body
    document.body.removeChild(aux);
  
  }