/*
* Excercise 1
*
*/

const blockcolor = document.getElementById("color-block");
const blocktext = document.getElementById("color-name");

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    
    currentcolor = blockcolor.style.backgroundColor
    console.log(currentcolor)
    //Write a condition determine what color it should be changed to
    if(currentcolor == 'rgb(240, 128, 128)'){
        blockcolor.style.backgroundColor = '#80d0f0';
        blocktext.innerHTML = '#80d0f0'
    }
    else{
        blockcolor.style.backgroundColor = '#F08080';
        blocktext.innerHTML = "#F08080"
    }
}

// blockcolor.addEventListener("click", () => {
//     changeColor()
//   });


blockcolor.addEventListener("click", changeColor);
// function clickFunction() {
//     blockcolor.style.backgroundColor = '#80d0f0';
// }
/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
const inputdegree = document.getElementById("f-input");
const submitbutton = document.getElementById("convertbtn");
const outputdegree = document.getElementById("c-output");

function convertTemp(){
    //Calculate the temperature here
    output = (inputdegree.value - 32) * 5/9;
    //Send the calculated temperature to HTML
    outputdegree.innerHTML = output
}
submitbutton.addEventListener("click",convertTemp)
