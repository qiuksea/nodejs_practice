const path = require('path')

//console.log(path.sep)

/*const filePath = path.join('youtube-node-express-full', 'subfolder', 'test.txt')*/

//const filePath = path.join('subfolder', 'test.txt')

//console.log(filePath)

/*const base = path.basename(filePath)
console.log(base)*/

const abspath = path.resolve(__dirname, 'subfolder', 'test.txt')
console.log(abspath)