const http = require('http');
const express = require('express');
const pool = require('./pool');

const app = express();
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});
const server = http.createServer(app);
server.listen(3000);

app.get("/carousel",(req,res)=>{
    var sql = "SELECT bid,title,md";
    sql += " FROM gm_carousel";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:200,msg:result});
    })
});
app.get("/groupby",(req,res)=>{
    var mposition = parseInt(req.query.mposition);
    var sql = "SELECT mid,cname,age,profile_sm";
    sql += " FROM gm_member WHERE mposition = ?";
    pool.query(sql,[mposition],(err,result)=>{
        if(err)throw err;
        var obj = result;
        res.send({code:200,msg:obj});
    });
});
app.get("/player",(req,res)=>{
    var sql = "SELECT mid,cname,mposition,appearances,playingtime,goal,assists,shoot,ontarget,fouls,steals,ycard,rcard,saves,fumble";
    sql += " FROM gm_member";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:200,msg:result});
    })
});
app.get("/germanydata",(req,res)=>{
    var type = req.query.type;
    var sql = `SELECT profile_sm,cname,${type}/appearances AS data FROM gm_member ORDER BY ${type}/appearances DESC LIMIT 0,4`;
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:200,msg:result});
    })
});
app.get("/newstop",(req,res)=>{
    var sql = `SELECT nid,title,author,editor,time,content,categoryId,pic_sm,pic_bg FROM news_top`;
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:200,msg:result});
    })
});
app.get("/login",(req,res)=>{
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    var sql = "SELECT uid FROM user_list WHERE uname=? AND upwd=?";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        res.send({code:200,msg:result});
    })
});
app.get("/signup",(req,res)=>{
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    var email = req.query.email;
    var phone = req.query.phone;
    var sql = "INSERT INTO user_list VALUES (NULL,?,?,?,?,NULL,NULL,2)";
    pool.query(sql,[uname,upwd,email,phone],(err,result)=>{
        if(err)throw err;
        res.send({code:200,msg:result});
    })
});