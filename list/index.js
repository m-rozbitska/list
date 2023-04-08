function ready() {

	//призначаємо подію обєкту
tree.addEventListener('click', function(event){
	let childrenShelter = event.target.parentNode.querySelector('ul');
	let target = event.target;
	//let CloseEverything = target.closest('.list').querySelector('ul');

	if (target.tagName == 'SPAN') {
		childrenShelter.hidden = !childrenShelter.hidden;
	};

	if (target.tagName == 'BUTTON' && !childrenShelter) {
		CloseEverything  = target.closest('.list').querySelector('ul');
	   CloseEverything.hidden = !CloseEverything.hidden;
	};

	if (target.tagName == 'BUTTON' && childrenShelter) {
		 childrenShelter.hidden = !childrenShelter.hidden;
	};
});
	
};
document.addEventListener('DOMContentLoaded', ready);

//tree.onclick = function(event) {
		//let childrenContainer = event.target.parentNode.querySelector('ul');
		//let target = event.target;
	
		//if (target.tagName == 'SPAN' && childrenContainer) {
			//console.log(childrenContainer);
			//childrenContainer.hidden = !childrenContainer.hidden;
		//}
	
		//if (target.tagName == 'SPAN' && !childrenContainer) {
			//let btnTagretAllHidden = target.closest('.list');
			//btnTagretAllHidden.hidden = !btnTagretAllHidden.hidden;
		//}
	
		//if (target.tagName == 'BUTTON' && childrenContainer) {
			//childrenContainer.hidden = !childrenContainer.hidden;
		//}
	//};
		//if (target.tagName == 'BUTTON' && !childrenShelter) {
		// let btnTagretColorChangeRed = target.closest('.list');
		//target.style.color = "red";
	//};

	//if(target.tagName == 'BUTTON' && childrenShelter) {
		//target.style.color = "green";
	//};

	// if (target.tagName == 'SPAN' && !childrenShelter) {
	// 	let btnTagretAllHidden = target.closest('.list');
	//    btnTagretAllHidden.hidden = !btnTagretAllHidden.hidden;
	// };
