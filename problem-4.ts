interface Circle {
	shape: "circle";
	radius: number;
}

interface Rectangle {
	shape: "rectangle";
	width: number;
	height: number;
}

const calculateShapeArea = (shape: Circle | Rectangle) => {
	if ("radius" in shape) {
		return (Math.PI * shape.radius ** 2).toFixed(2);
	} else {
		return (shape.width * shape.height).toFixed(2);
	}
};
