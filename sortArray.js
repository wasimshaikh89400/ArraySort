	var arr = [43,34,76,87,54,45,45,34]

	var k = prompt("enter")
	var sortA = arr.sort()

	for(var i=0; i<sortA.length ; i++)
		if(sortA[i] == k) {
			console.log("postion of K is " + i)
		}
		else{
			console.log("element are not match")
		}
	console.log(sortA)