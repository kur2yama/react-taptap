


// react 项目接口的 路由模块 

var express = require("express");

var router = express.Router();

var {conn}  =  require("./utils/db");
var {setError,aesEncrypt,aesDecrypt ,keys} = require("./utils");
var {getConn} = require("./utils/mongoose");
var {ObjectID}  = require("mongodb");
var {series}= require("async");

router.get("/index",(req,res)=>{
    res.json({
        msg:"这是 react 项目的 后台接口 路径"
    })
})

// 获取所有评论
router.get("/getComments",(req,res)=>{
    conn((err,db)=>{
        setError(err,res,db);
        db.collection("comments").find({},{}).sort({_id:-1}).toArray((err,result)=>{
            setError(err,res,db);
            res.json({
                code:200,
                msg:"评论查询成功",
                result
            })
            db.close();
        })
    })
})
// 添加评论

// 先插入 在查询 
router.post("/addComment",(req,res)=>{
    var body = req.body;
    console.log(body);
    conn((err,db)=>{
        setError(err,res,db);
        var comments =  db.collection("comments");
        series([
            (callback)=>{
                comments.insert(body,(err,result)=>{
                    callback(err,result);
                })
            },
            (callback)=>{
                comments.find({},{}).sort({_id:1}).toArray((err,result)=>{
                    callback(err,result);
                })
            }
        ],(err,result)=>{
            setError(err,res,db);
            res.json({
                code:200,
                msg:"评论添加成功",
                result:result[1]
            })
            db.close();
        })
    })
})
// 删除评论
router.get("/delComment",(req,res)=>{
    var _id =  req.query._id || ""
    conn((err,db)=>{
        setError(err,res,db);
        db.collection("comments").remove({_id:ObjectID(_id)},(err,result)=>{
            setError(err,res,db);
            res.json({
                code:200,
                msg:"评论删除成功",
                result
            })
            db.close();
        })
    })
})



module.exports = router;