// const amount = 9
// if(amount < 10){
//     console.log('small number');
// }else{
//     console.log('large number');
// }
// console.log(`hey it's my first node app!!!`)


// Modules
// const names = require('./4-names');
// const sayHiFun = require('./5-utils');
// const data = require('./6-alternative-flavor');
// require('./7-mind-grenade');
//console.log(data);
//console.log(names);

// sayHi('susan');
// sayHi(john);
// sayHi(peter);

// sayHiFun('susan')
// sayHiFun(names.john)
// sayHiFun(names.peter)


// const os = require('os')

// // info about current user
// const user = os.userInfo();
// console.log(user);

// // metod returns the system uptime in seconds
// console.log(`the system uptime is ${os.uptime()} seconds`);
// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS);


// const path = require('path');
// console.log(path);
// const filePath = path.join('/content/', 'subfolder','test.txt');
// console.log(filePath);
// const base = path.basename(filePath)
// console.log(base);

// const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
// console.log(absolute);

// const {readFileSync, writeFileSync} = require('fs');
// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt', 'utf8');
// writeFileSync(
//     './content/result-sync.text',
//     `Here is the result : ${first}, ${second}`,
//     {flag: 'a'}
//     )


// const {readFile, writeFile} = require('fs');
// readFile('./content/first.txt','utf8',(err,result) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     //console.log(result);
//     const first = result;
//     readFile('./content/second.txt','utf8',(err,result) => {
//         if(err){
//             console.log(err)
//             return
//         }
//         const second = result;
//         writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`,(err,result) => {
//             if(err){
//                 console.log(err)
//                 return
//             }
//             console.log(result);
//         })
//     })
// })


// const http = require('http');
// const server = http.createServer((req,res) => {
//     //console.log(req)
//     if(req.url === '/'){
//         res.end('welcome to our home page');
//         return;
//     }
//     if(req.url === '/about'){
//         res.end('Here is our short history')
//         return;
//     }
//     //res.write('welcome to our home page');
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We Can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `);
// })
// server.listen(5000);



const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);