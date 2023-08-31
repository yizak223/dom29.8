var computerElement=document.getElementById('myDiv')
var computerArray=[]
function getComputersObjects(num) {
    for(let i = 0; i < num; i++) {
        computerArray[i]={
            company:prompt('comp'),
            model:prompt('model'),
            heavy:+prompt('heavy'),
            supplay:confirm('is exsist?')
        }
    }
    console.log(computerArray); 
}  
getComputersObjects(2) 
function printToScreenComputerArray() {
    for (let i = 0; i < computerArray.length; i++) {
        if(computerArray[i].supplay==true && computerArray[i].heavy>2){
            computerElement.innerHTML+=`<p>the compan: ${computerArray[i].company}
            the model: ${computerArray[i].model}
            his heavy: ${computerArray[i].heavy}
            supplay: ${computerArray[i].supplay}</p>`
        }
    }
}
printToScreenComputerArray()
