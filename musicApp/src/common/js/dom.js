export function addClass(el,className){
	console.log(el);
	let newClass =  el.className.split('');
	newClass.push(className)
	el.className = newClass.join(' ')

}

export function hasClass(el,className){

}