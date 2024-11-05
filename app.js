const os = require("os");
// console.log(os)

const frememo = os.freemem()
console.log(frememo)

const platform = os.platform()
console.log(platform)

const fs = require("fs")

fs.readFile("./abebe.txt", 'utf8', (err, data)=>{
if(err) {
    console.log(err)
    return 
}
console.log(data)
}
)

