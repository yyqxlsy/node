var express = require('express');
var router = express.Router();
var mgdb = require('../../common/mgdb')

router.get('/', function (req, res, next) {

  let {dataName,q,rule,start,count} = res.params;
  if (!dataName) {
    res.send({error:1,msg:'dataName为必传参数'})
    return;
  }
// console.log(dataName)

  mgdb({
    collection: dataName
  }, ({ collection, client }) => {
    collection.find().toArray((err, result) => {
      let checkResult = result.slice(start * count, start * count + count)//提取要分页的数据
      let data = {
        total:result.length,
        start:start+1,count,
        page_count: Math.ceil(result.length / count),//计算总页数
        page_data: checkResult,
      }
      console.log(result)
      res.send({error:0,msg:'成功',...data,result});
      client.close();
    })
  })

});

module.exports = router;
