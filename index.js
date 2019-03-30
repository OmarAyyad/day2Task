const operations = require('./operations');

const yargs = require('yargs');

let args = yargs.alias('add','a').array('add').argv;

console.log(args)

var params = args.add;
let func = operations['add'];

let result =func(...params);

console.log("add = " + result);


// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('add = ' + result+'\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
   




// yargs // eslint-disable-line
//   .command('serve [port]', 'start the server', (yargs) => {
//     yargs
//       .positional('port', {
//         describe: 'port to bind on',
//         default: 5000
//       })
//   }, (argv) => {
//     if (argv.verbose) console.info(`start server on :${argv.port}`)
//     serve(argv.port)
//   })
//   .option('verbose', {
//     alias: 'v',
//     default: false
//   })
//   .argv





// yargs.command('index', 'Calculator', (yargs) => {

//   yargs.option('add',{
//     alias:'a',
//   })

//   yargs.option('sub',{
//     alias:'s',
//   })

//   yargs.option('div',{
//     alias:'d',
//   })

//   yargs.option('mult',{
//     alias:'m',
//   })

//   yargs.option('mod',{
//     alias:'m',
//   })
// });



