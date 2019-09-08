document.addEventListener("DOMContentLoaded", function () {

	///////////////Test////////////////


	//var book = document.querySelector('#book-list li:nth-child(2) .name');
	//
	//var books = document.querySelectorAll('#book-list li .name');

	//overwritten the content --replace to test
	//Array.from(books).forEach(function (book) {
	//	book.textContent = 'test';
	//})

	//append (добавить) content
	//Arrat.from(books).forEach(function (book) {
	//	book.textContent += ' (book title)';
	//})

	//-----------------------------------------------------------------------
	//const bookList = document.querySelector('#book-list');
	// replace the content second variant
	//bookList.innerHTML = '<h2>Books and more books...</h2>';

	//appent to the content second variant
	//bookList.innerHTML += '<p>This is how you add HTML</p>';

	//-----------------------------------------------------------------------
	//to retrieve from the DOM = получить из DOM
	//NODE - узел, узловой элемент
	//types of Node - are elements, textNodes, comments, attributes
	//traversal - обходить
	//insert - включать,вставлять

	//-----------------------------------------------------------------------
	//const banner = document.querySelector('#page-banner');
	//console.log('The type of the #page-banner is:', banner.nodeType);
	//console.log('The name of the #page-banner is:', banner.nodeName);
	//console.log('Has the #page-banner child nodes:', banner.hasChildNodes());

	//-----------------------------------------------------------------------
	//const bannerCloned = banner.cloneNode(true);

	//-----------------------------------------------------------------------
	//parent and child of the node
	//const bookList = document.querySelector('#book-list');
	//console.log('The parent node is: ',bookList.parentNode);
	//console.log('The parent element is: ',bookList.parentElement.parentElement);

	//console.log(bookList.childNodes);//text in collection is line break(перенос строки)
	//console.log(bookList.children);//only child elements

	//-----------------------------------------------------------------------
	//DOM traversal(siblings)
	//console.log('book-list next sibling is: ',bookList.nextSibling);//line break is next sibling
	//console.log('book-list next element is: ',bookList.nextElementSibling);

	//console.log('book-list previous sibling is: ',bookList.previousSibling);
	//console.log('book-list previous element is: ',bookList.previousElementSibling);

	//bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';
	//-----------------------------------------------------------------------

	//Events----delete li
	//var btns = document.querySelectorAll('#book-list .delete');
	//Array.from(btns).forEach(function(btn) {
	//	btn.addEventListener('click', function(e) {
	//		const li = e.target.parentElement;
	//		li.parentNode.removeChild(li);
	//	});
	//});

	//stop default behavior of the browser with the links

	//const link = document.querySelector('#page-banner a');
	//link.addEventListener('click', function (e) {
	//	e.preventDefault();
	//	console.log('navigation to: ', e.target.textContent, 'was prevented.')//prevent-предотвратить
	//})



	///////////////Application////////////////
	//----------------------------------------------------
	const list = document.querySelector('#book-list ul');
	const forms = document.forms;

	//bubbling the events---delete books---better variant than above

	list.addEventListener('click', e => {
		if (e.target.className == 'delete') {
			const li = e.target.parentElement;
			list.removeChild(li);
		}
	});


	//add books
	const addForm = forms['add-book'];
	addForm.addEventListener('submit', e => {
		e.preventDefault();

		//create elements
		const value = addForm.querySelector('input[type="text"]').value;
		const li = document.createElement('li');
		const bookName = document.createElement('span');
		const deleteBtn = document.createElement('span');

		//add text content
		deleteBtn.textContent = 'delete';
		bookName.textContent = value;

		//add classes
		bookName.classList.add('name'); //better choice than .className
		deleteBtn.classList.add('delete');

		//append to DOM
		li.appendChild(bookName);
		li.appendChild(deleteBtn);
		list.appendChild(li);

	})

	//hide books
	const hideBox = document.querySelector('#hide');
	hideBox.addEventListener('change', e => {
		if (hideBox.checked) {
			list.style.display = "none";
		} else {
			list.style.display = "initial";
		}
	});

	//filter books
	const searchBar = forms['search-books'].querySelector('input');
	searchBar.addEventListener('keyup', e => {
		const term = e.target.value.toLowerCase();
		const books = list.getElementsByTagName('li');
		Array.from(books).forEach((book) => {
			const title = book.firstElementChild.textContent;
			if (title.toLowerCase().indexOf(term) != -1) {
				book.style.display = "block";
			} else {
				book.style.display = "none";
			}
		})
	})


	//tabbed content
	const tabs = document.querySelector(".tabs");
	const panels = document.querySelectorAll(".panel");
	tabs.addEventListener("click", e => {
		if (e.target.tagName == "LI") {
			const targetPanel = document.querySelector(e.target.dataset.target);
			panels.forEach(panel => {
				if (panel == targetPanel) {
					panel.classList.add("active");
				} else {
					panel.classList.remove("active");
				}
			})
		}
	})


});
