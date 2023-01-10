//your code here
let typing=document.getElementsByTagName("input")[0]
let word=document.getElementById("evaluatedText")
let update=document.getElementById("lettercount")
typing.addEventListener("input",()=>{count(word.value)})
function count(word){
	let length=word.length
	update.innerText=length
	
}


