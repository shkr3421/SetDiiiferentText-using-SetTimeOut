db.products.insertMany([{_id:1,name:"laptop",category:"Electronics",price:500000},{_id:2,name:"mobile",category:"Electronics",price:20000},{_id:3,name:"chair",category:"furniture",price:3000},{_id:4,name:"table",category:"furniture",price:7000}])
db.products.find()

db.products.updateMany({category:"electronics"},{$inc:{price:2000}})

db.products.find()
db.products.find().pretty()
db.products.updateMany({category:"Electronics"},{$inc:{price:2000}})
db.products.find()
db.products.updateMany({category:"furniture"},{$mul:{price:1.15}})
db.products.find()

db.products.insertMany([{_id:1,name:"laptop",category:"Electronics",price:500000,year:2024},{_id:2,name:"mobile",category:"Electronics",price:20000,year:2023},{_id:3,name:"chair",category:"furniture",price:3000,year:2021},{_id:4,name:"table",category:"furniture",price:7000,year:2020}])

db.product.insertMany([{_id:1,name:"laptop",category:"Electronics",price:500000,year:2024},{_id:2,name:"mobile",category:"Electronics",price:20000,year:2023},{_id:3,name:"chair",category:"furniture",price:3000,year:2021},{_id:4,name:"table",category:"furniture",price:7000,year:2020}])

db.products.find()

db.product.find()

db.product.updateMany({year:{$type:"number"}},[{$set:{year:{$dateFromParts:{year:"$year",month:1,day:1}}}}])

db.product.find()


db.users.insertOne({_id:1,name:"sara",email:"sara@gmail.com",orders:[{order_id:1,product:"mobile",price:8000},{order_id:2,product:"headset",price:3000}]})

db.users.find()

db.users.find().pretty()

db.users.updateOne({_id:1},{$push:{orders:{orders_id:3,product:"charger",price:1000}}})

db.users.find().pretty()



db.users.updateOne({_id:1,"orders.order_id":1},{$set:{orders.$.price:15000}})

db.users.updateOne({_id:1,"orders.order_id":1},{$set:{"orders.$.price":15000}})

db.users.find().pretty()

db.users.updateOne({_id:1},{$pull:{orders:{product:"headset"}}})

db.users.find().pretty()



use ecommerce

db.orders.insertMany([{_id:1,user:"Ali",product:"mobile",category:"electronics",price:15000,qecommerce> db.orders.insertMany([{_id:1,user:"Ali",product:"mobile",category:"electronics",price:15000,qecommerce> db.orders.insertMany([{_id:1,user:"Ali",product:"mobile",category:"electronics",price:15000,qecommerce> db.ordeecommerce> db.orders.insertMany([{_id:1,user:"Ali",product:"mobile",category:"electronics",price:15000,quantity:1},{_id:2,user:"sara",product:"laptop",category:"electronics",price:55000,quantity:1},{_id:3,user:"Ali",product:"headset",category:"electronics",price:2000,quantity:2},{_id:4,user:"john",product:"shirt",category:"clothing",price:1000,quantity:3},{_id:5,user:"sara",product:"shoes",category:"clothing",price:3000,quantity:1}])

db.users.find().pretty()


db.orders.find().pretty()




 db.orders.find().pretty()





db.orders.aggregate([{$match:{$expr:{$gt:[{multiply:["$price","$quantity"]},10000]}}}])

db.orders.find()


db.orders.aggregate([{$group:{_id:"$category",totalCategorySales:{$sum:{$multiply:["$price","$quantity"]}}}}])

