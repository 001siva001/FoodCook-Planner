const donateBtn=document.querySelector("#donate-btn");
const donateContainer=document.querySelector("#donate-container");
const Btn=document.querySelector("#btn");
const inputEl=document.querySelector("form input");
console.log(inputEl)

donateBtn.addEventListener("click",(e)=>{
	event.preventDefault();
	if(donateContainer.classList.contains("hide")){
		donateContainer.classList.remove("hide")
		console.log("donateContainer id hide")
	}
	else{
		donateContainer.classList.add("hide")
		console.log("donateContainer not hide")
	}
})

function handleDonateBtn(event){
	event.preventDefault();
	alert(`Thank you for Donate : ${inputEl.value} RS`)
	inputEl.value=""
}

Btn.addEventListener("click",handleDonateBtn)
inputEl.addEventListener("keyup",(e)=>{
	if(e.key==="Enter"){
		alert(`Thank you for Donate : ${inputEl.value} RS`)
		inputEl.value=""
	}
})