let fs = require('fs');
let str = '\n';
function writeData(data){
	fs.appendFile('index.css',data,(err)=>{
		if(err){
			console.log(err);
		} else {
			console.log('success');
		}
	})
}

// for(let i=1;i<=10;i++){
// 	str += `.mb-${i} {margin-bottom:${(i*5)}px;}\n`
// }
for(let i=1;i<=10;i++){
	str += `.height-${i*10} {height:calc(${(i*10)}vh);}\n`
}
writeData(str);
