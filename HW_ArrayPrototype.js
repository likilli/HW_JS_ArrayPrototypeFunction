

////Array.prototype.reject()
////как Array#Filter только пропускает элементы, для которых коллбэк вернет false
/////////////
var array = [1,2,3,4,5,6,7,8,9,4,5,6,7,7,5,6]
var arrNew = array.Reject(function (el)
{
	return el % this
}, 2)
console.log(arrNew)

Array.prototype.filter = function (callback, context)
{
	var arr = []
	var length = this.length
	if (length < 0) length = 0

	for (var i = 0; i < length; i++) 
	 	if(i in this)
	 		if(callback.call(context,this[i], i, this)== false)
	 			arr.push(this[i])

	return arr 		
}

////Array.prototype.slice(index) который возвращает новый массив, с index и до конца массива
////////////////////////////////////

var array = [1,2,3,4,5,6,'string','hello']
var arrNew = array.slice(function ()
{
	return arrNew
})
console.log(arrNew)

Array.prototype.slice = function(index)
{
	var arr = []
	this.index = index
		if(index >= 0 && index < this.length)
		{
			for(var i = index; i < length; i++)
			{
				this[i] = callback.call(this[i], array)
			    arr.push(this[i])
			}
		}
		console.log(arr)
	return arr
} 

