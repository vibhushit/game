const GIRD_SIZE = 21;

export function randomGridPosition(){
	return{
		x: Math.floor(Math.random() * GIRD_SIZE) + 1,
		y: Math.floor(Math.random() * GIRD_SIZE) + 1
	};
}