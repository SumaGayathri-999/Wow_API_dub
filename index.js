let express = require('express')
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 3000;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongourl = process.env.LiveMongo;
let db;
const cors = require("cors");
app.use(cors());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Credentials",true);
    res.header("Access-Control-Allow-Methods",'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers",'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.get("/products",(req,res)=>{

    db.collection("products").find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
app.get("/categories_list",(req,res)=>{
    db.collection("category").find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.get("/ingredients_list",(req,res)=>{
    db.collection("ingredients").find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
app.get("/concerns_list",(req,res)=>{
    db.collection("concern").find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
app.get("/product_type_list",(req,res)=>{
    db.collection("product_type").find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})


app.get("/products/:productid",(req,res)=>{
    let productid=Number(req.params.productid);
    db.collection("products").find({"product_id":productid}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
    
})


app.get("/categories/:categoryid",(req,res)=>{
    let categoryid = Number(req.params.categoryid);
    let min_price = Number(req.query.min_price);
    let max_price = Number(req.query.max_price);
    let product_type_id = Number(req.query.product_type_id);
    let query ={};
    
    if(min_price && max_price && product_type_id){
        query = {$and:[{"quantity.price":{$gt:min_price}},{"quantity.price":{$lt:max_price}},{"category_id":{$in:[categoryid]}},{"product_type_id":product_type_id}]};
    }
    else if(min_price && max_price){
         query = {$and:[{"quantity.price":{$gt:min_price}},{"quantity.price":{$lt:max_price}},{"category_id":{$in:[categoryid]}}]};
    }
    else if(product_type_id){
         query={$and:[{"product_type_id":product_type_id},{"category_id":{$in:[categoryid]}}]}
    }
    else{
         query={"category_id":{$in:[categoryid]}};
    }
    
    db.collection("products").find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
app.get("/ingredients/:ingredientid",(req,res)=>{
    let ingredientid = Number(req.params.ingredientid);
    let min_price = Number(req.query.min_price);
    let max_price = Number(req.query.max_price);
    let product_type_id = Number(req.query.product_type_id);
    let query={};
    if(min_price && max_price && product_type_id){
        query = {$and:[{"quantity.price":{$gt:min_price}},{"quantity.price":{$lt:max_price}},{"ingredient_id":ingredientid},{"product_type_id":product_type_id}]};
    }
    else if(min_price && max_price){
         query = {$and:[{"quantity.price":{$gt:min_price}},{"quantity.price":{$lt:max_price}},{"ingredient_id":ingredientid}]};
    }
    else if(product_type_id){
         query={$and:[{"product_type_id":product_type_id},{"ingredient_id":ingredientid}]}
    }
    else{
         query={"ingredient_id":ingredientid};
    }
    
    db.collection("products").find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
    
})
app.get("/concern/:concernid",(req,res)=>{
    let concernid = Number(req.params.concernid);
    let min_price = Number(req.query.min_price);
    let max_price = Number(req.query.max_price);
    let product_type_id = Number(req.query.product_type_id);
    let query ={};
    if(min_price && max_price){
        query = {$and:[{"quantity.price":{$gt:min_price}},{"quantity.price":{$lt:max_price}},{"concern_id":{$in:[concernid]}},{"product_type_id":product_type_id}]};

    }
    else if(min_price && max_price){
         query = {$and:[{"quantity.price":{$gt:min_price}},{"quantity.price":{$lt:max_price}},{"concern_id":{$in:[concernid]}}]};
    }
    else if(product_type_id){
         query={$and:[{"product_type_id":product_type_id},{"concern_id":{$in:[concernid]}}]}
    }
    else{
         query={"concern_id":{$in:[concernid]}};
    }
    
    db.collection("products").find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

MongoClient.connect(mongourl,(err,client)=>{
    if(err){
        console.log(err);
    }
    else{
        db=client.db("wow_data");
        app.listen(port,()=>{
            console.log("lisening")
        })
    }
})
