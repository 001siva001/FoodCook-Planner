let inputFood=document.querySelector("#input-food");
let inputBtn=document.querySelector("#input-btn")
let foodContainer=document.querySelector(".food-container")

// getItem from Local storage

document.addEventListener("DOMContentLoaded",()=>{
	const fetchedFoodItems=[...JSON.parse(localStorage.getItem("foodItems"))];
	fetchedFoodItems.forEach((item)=>{
		const liEl=document.createElement("li");
		const divEl=document.createElement("div");
		const divBtn=document.createElement("div");
		const textNode=document.createTextNode(item.foodItem.toUpperCase());

		liEl.className="food-item";
		divEl.append(textNode);
		divBtn.setAttribute("onclick","removeList(event)")
		divBtn.innerHTML=`<i class="bi bi-x-circle"></i>`
		liEl.append(divEl,divBtn);
		foodContainer.append(liEl);
		refreshUI()
	})
})


// function for new list
const handleFoodContainer= ()=>{
	const liEl=document.createElement("li");
	const divEl=document.createElement("div");
	const divBtn=document.createElement("div")
	const textNode=document.createTextNode(inputFood.value.toUpperCase());

	liEl.className="food-item";
	divEl.append(textNode);
	divBtn.setAttribute("onclick","removeList(event)")
	divBtn.innerHTML=`<i class="bi bi-x-circle"></i>`
	liEl.append(divEl,divBtn);
	foodContainer.append(liEl);

	// set Item in local storage
	localStorage.setItem("foodItems",
	JSON.stringify([...JSON.parse(localStorage.getItem("foodItems")|| "[]"),
	{foodItem:inputFood.value.toUpperCase()}]))

	inputFood.value="";
	refreshUI()
}


// save button event
inputBtn.addEventListener("click",()=>{
	if(!inputFood.value){
		return
	}
	else{
		handleFoodContainer()
	}
});


// Enter button event
inputFood.addEventListener("keyup",(e)=>{
	if(e.key==="Enter"){
		if(!inputFood.value){
			return
			}
		else{
			handleFoodContainer()
		}
	}

	// remove last list Event
	else if(e.key==="Delete"){
		removeLastList()	
	}
});



// remove list function
function removeList(event){
	const existItem=event.target.parentElement.parentElement;
	existItem.remove();
// remove from localstorage
const fetchedFoodItems=[...JSON.parse(localStorage.getItem("foodItems"))];
fetchedFoodItems.forEach((item)=>{

	if(item.foodItem === existItem.innerText){
		fetchedFoodItems.splice(fetchedFoodItems.indexOf(item),1)
	}
	
});
	localStorage.setItem("foodItems",JSON.stringify(fetchedFoodItems));

	refreshUI()
}

// remove last list fuction
function removeLastList(){
	const lastLi=foodContainer.lastChild;
	if(foodContainer.children.length>0){
		lastLi.remove();
	}
	else{
		return
	};
	const fetchedFoodItems=[...JSON.parse(localStorage.getItem("foodItems"))];
	fetchedFoodItems.forEach((item)=>{

	if(item.foodItem === lastLi.innerText){
		fetchedFoodItems.splice(fetchedFoodItems.indexOf(item),1)
	}
	
	});
	localStorage.setItem("foodItems",JSON.stringify(fetchedFoodItems));

	refreshUI()
};

// no list img hidden
const noListEl=document.querySelector("#no-list");
const statisticEl=document.querySelector("#statistic");

function refreshUI(){
	statisticEl.innerHTML=`You have ${foodContainer.children.length} item`
	if(foodContainer.children.length>0){
		noListEl.hidden=true;
		statisticEl.hidden=false;
	}
	else{
		noListEl.hidden=false;
		statisticEl.hidden=true;
	}
}
