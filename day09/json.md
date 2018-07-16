## json

### json对象

	JSON.stringify方法

	let json = {
		"a" : 12,
		"b" : 5
	}
	let str = 'http://www.baidu.com' + JSON.stringify(json)
	console.log(str)


	json变成字符串parse

	let str = '{"a":12,"b":5}'
	let json = JSON.parse(str)
	console.log(json)

	json标准写法:
	只能用双引号
	所有的名字都是引号包起来

### json简写

	名字一样

	let a = 12;
	let b = 5;
	let json = {a,b}
	console.log(json)

	方法的简写

	let json = {
		a : 12,
		show(){
			console.log(this.a)
		}
	}
	json.show()