function isArry(arr) {
	
}

function isFunction(fn) {

}

function cloneObject(src) {

}

var srcObj = {
	a: 1,
	b: {
		b1: ['hello', 'hi'],
		b2: 'JavaScript'
	}
};

var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);