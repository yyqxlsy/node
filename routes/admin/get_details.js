var express = require('express');
var router = express.Router();
var mgdb = require('../../common/mgdb')
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
router.post('/get_details', function(req, res, next) {
    var name=req.body.name;
    mgdb(
        {collection:'data'},
        ({collection,client})=>{
            collection.find({'goodsId':name}).toArray((err,result)=>{
                if(!err && result.length>0){
                    res.json(result)
                }else{
                    res.json('数据为空')
                }
            })
        }
    )
});
router.get('/get_list', function(req, res, next) {
    mgdb(
        {collection:'data'},
        ({collection,client})=>{
            collection.find({}).toArray((err,result)=>{
                if(!err && result.length>0){
                    res.json(result)
                }else{
                    res.json('数据为空')
                }
            })
        }
    )

});
module.exports = router;