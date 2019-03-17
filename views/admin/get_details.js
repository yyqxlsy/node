var express = require('express');
var router = express.Router();
var mgdb = require('../../common/mgdb')

router.get('/get_details', function(req, res, next) {
    mgdb(
        {collection:'admin'},
        ({collection,client})=>{
            collection.find({}).toArray((err,result)=>{
                if(!err && result.length>0){
                    res.json(result)
                }else{
                    // res.redirect(跳转地址==string)
                    res.json('数据为空')
                }
            })
        }
    )

});
module.exports = router;