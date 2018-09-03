let fs = require('fs');
var path = process.argv.splice(2);
if(path.length==0){
    console.log('请输入文件名')
    return;
}

function createFile(path){
let jsData = `
    import React,{ Component } from 'react';
    import './index.scss';
    class ${path} extends Component {
        constructor(props) {
            super(props);
            this.state = {

            }
        }

        render(){
            return (
                <div className="${path}">
                
                </div>
            )
        }
    }
    export default ${path};
`
    let cssData = `.${path} {
        
    }`
    fs.mkdir(path,(err)=>{
        if(err){
            console.log('文件夹已存在')
        } else {
            console.log('success')
        }
    })
    fs.appendFile(`${path}/index.js`,jsData,(err)=>{
        if(err) {
            console.log('err',err)
        } else {
            console.log('success')
        }
    })
    fs.appendFile(`${path}/index.scss`,cssData,(err)=>{
        if(err) {
            console.log('err',err)
        } else {
            console.log('success')
        }
    })
}
path.forEach(item=>{
    createFile(item)
})