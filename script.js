//your code here

let word=document.getElementById("evaluatedText")
let update=document.getElementById("lettercount")
let btn=document.getElementByTagName("button")[0]
btn.addEventListener("click",()=>{count(word.value)})
function count(word){
	let length=word.length
	update.innerText=length
	
}


