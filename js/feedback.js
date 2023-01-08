const formEl=document.forms.feedback;

const formBtn=document.querySelector("form button");

const handleSubmit=(event)=>{
	event.preventDefault()
	const formData=new FormData(formEl);
	const data=[...formData.entries()];
	console.log(data);
	const jsonData=JSON.stringify(Object.fromEntries(formData));
	console.log(jsonData);
};

formEl.addEventListener("submit",handleSubmit);

const nameEl=formEl.elements.fullname;

function handleNameInput(){
	nameEl.disabled=true;
	alert("you can't paste here")
	nameEl.disabled=false;
}

nameEl.addEventListener("paste",handleNameInput);

nameEl.addEventListener("change",(e)=>{
	console.log(e.target.value);
})