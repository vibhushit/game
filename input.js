let inputDirection = { x:0, y:0 };
let lastInputDirection = {x:0 , y:0};

let x=document.getElementById('desktop');
let y=document.getElementById('mobile');


window.addEventListener('keydown', e =>{
	switch(e.key){
		case 'ArrowUp':
			x.innerHTML='';
			if(lastInputDirection.y !==0 ) break;
			inputDirection = { x:0, y:-1};
			break;
		case 'ArrowDown':
			x.innerHTML='';
			if(lastInputDirection.y !==0 ) break;
			inputDirection = { x:0, y:1};
			break;
		case 'ArrowLeft':
			x.innerHTML='';
			if(lastInputDirection.x !==0 ) break;
			inputDirection = { x:-1, y:0};
			break;
		case 'ArrowRight':
			x.innerHTML='';
			if(lastInputDirection.x !==0 ) break;
			inputDirection = { x:1, y:0};
			break;
	}
});

document.getElementById('upButton').addEventListener('click', function(){
	console.log("up button pressed");
	y.innerHTML = '';
	if(lastInputDirection.y !==0 ) {
		
	}else{
		inputDirection = { x:0, y:-1};
	}
	
});

document.getElementById('leftButton').addEventListener('click', function(){
	console.log("left button pressed");
	y.innerHTML = '';
	if(lastInputDirection.x !==0 ) {
		
	}else{
		inputDirection = { x:-1, y:0};
	}
});

document.getElementById('rightButton').addEventListener('click', function(){
	console.log("right button pressed");
	y.innerHTML = '';
	if(lastInputDirection.x !==0 ) {
		
	}else{
		inputDirection = { x:1, y:0};
	}
});

document.getElementById('downButton').addEventListener('click', function(){
	console.log("down button pressed");
	y.innerHTML = '';
	if(lastInputDirection.y !==0 ) {
		
	}else{
		inputDirection = { x:0, y:1};
	}
});


export function getInputDirection(){
	lastInputDirection = inputDirection;
	return inputDirection;
}