$('document').ready(function () {
	//when the page is loaded
	loadMenu();

	
});
//section variables
var d = document;
var menu = d.querySelector('#menu');

var additionsArray = [
		{
			"name": "cheese",
			"cost": 25,
			"calories": 55
			},
		
		{
			"name": "tomatoes",
			"cost": 18,
			"calories": 30
			},
	
		{
			"name": "pepper",
			"cost": 10,
			"calories": 15
			},

		{
			"name": "mashrooms",
			"cost": 15,
			"calories": 33
			},
	
		{
			"name": "corn",
			"cost": 12,
			"calories": 25
			},

		{
			"name": "olives",
			"cost": 15,
			"calories": 25
			},
];



//upload pizzas to the page	
function loadMenu() {
	$.getJSON('pizzas.json', function (data) {
		//console.log(data);

		//going through pizzas json
		for (var key in data) {
			let item = d.createElement('li');
			item.setAttribute('class', 'itemBox');

//			//going trough ingredients array
			let ingr = '/ ';
			for (let j = 0; j < data[key]['ingredients'].length; j++) {
				ingr += (data[key]['ingredients'][j] + ' / ');
			}
			
			
			//build additinal ingredients section
			let addIngrBlock = ``;
		    for (let i = 0; i < additionsArray.length; i++ ) {
			    addIngrBlock += `<li>
                                     <label class="container">${additionsArray[i].name}
                                          <input type="checkbox">
                                          <span class="checkmark"></span>
                                     </label>
                                 </li>`;
		    }
		

			//build MENU item content
			let itemContent = `<div class="itemInfo">
                                       <div class="back"> 
										   <img src="${data[key]['image']}" /> 
									   </div>
									   <div class="front">
										   <h2 class="itemTitle">${data[key]['title']}</h2> 
										   <p class="itemIngredients">Consist: ${ingr}</p> 
										   <div class="itemAddings">Make an adding:
											   <ul id="addings">${addIngrBlock}</ul>
										   </div> 
										   <div class="itemUpdatableInfo"> 
											   <span id="itemCalories">${data[key]['calories']} calories  /  </span> 
											   <span id="itemPrice">${data[key]['price']} UAH</span> 
										   </div> 
									   </div> 
						       </div> 
						       <div id="addToBasketButton"> 
							       <button>Add to basket</button> 
						       </div>`;


			item.innerHTML = itemContent;
			menu.append(item);
		}
		console.log(menu);
		
		//flip item cards when the clicked 
        let itemInfo = d.querySelectorAll('.itemInfo');//select all item info cards

        function flipCard () {
			this.classList.toggle('flip');
		}

		itemInfo.forEach(card => card.addEventListener('click', flipCard));
		
		
		//toggle grid/list view
		let menuBoxes = menu.querySelectorAll('.itemBox');//select all item boxes
		let filterBox = d.getElementById('#filter');//select filter section
		let sortBox = d.getElementById('#sort');//select sort section
//		let swichViewBtns = d.querySelectorAll('.nav-btn');//select nav buttons - Title/List
//		
//		function swichView () {
//			console.log(this);
//			console.log('I was clicked');
//			
//			
//			
//		}
//		
//		swichViewBtns.forEach(btn => btn.addEventListener('click', swichView));
		
//		function listView() {
//			menuBoxes.forEach(box => box.style.width = "100%");
//		}
//		
//		function titleView() {
//			
//		}
		
		
	})
}


let menuBoxes = menu.querySelectorAll('.itemBox');
function listView() {
			menuBoxes.forEach(box => box.style.width = "100%");
		}
		
		function titleView() {
			
		}

