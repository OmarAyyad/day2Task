
const finalhandler = require('finalhandler')
const http = require('http')
const Router = require('router')
const fs=require('fs');



 
const router = Router()
router.get('/imgs', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    fs.readdir('./imgs', function(err, items) {
        res.end(JSON.stringify(items));
      });
});

router.get('/imgs/:myfile',function(req,res){
fs.readFile(`./imgs/${req.params.myfile}`, (err,data)=>{
    res.end(data);
});
});

const server = http.createServer(function (req, res) {
    router(req, res, finalhandler(req, res))
})

server.listen(3000)