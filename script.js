//your code here
let word=document.getElementById("evaluatedText")
let update=document.getElementById("letterCount")
word.addEventListener("input",()=>{count(word.value)})
function count(word){
	let length=word.length
	update.innerText=length	
}



