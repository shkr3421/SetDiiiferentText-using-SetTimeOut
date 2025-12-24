use product_db

db.products.insertMany([
  {
    _id: 1,
    name: "Laptop",
    category: "electronics",
    price: 60000,
    stock: 10,
    likes: 50
  },
  {
    _id: 2,
    name: "Mobile",
    category: "electronics",
    price: 20000,
    stock: 25,
    likes: 120
  },
  {
    _id: 3,
    name: "Chair",
    category: "furniture",
    price: 3000,
    stock: 40,
    likes: 30
  },
  {
    _id: 4,
    name: "Table",
    category: "furniture",
    price: 7000,
    stock: 15,
    likes: 45
  },
  {
    _id: 5,
    name: "Headphones",
    category: "electronics",
    price: 2500,
    stock: 60,
    likes: 80
  }
])








$set – Scenario Answers

// 1. Update only email
db.users.updateOne({ _id: 1 }, { $set: { email: "newemail@gmail.com" } })

// 2. Update order status
db.orders.updateOne({ order_id: 101 }, { $set: { status: "delivered" } })

// 3. Add discount field
db.products.updateOne({ _id: 5 }, { $set: { discount: 10 } })

// 4. Update nested city
db.users.updateOne({ _id: 1 }, { $set: { "address.city": "Mumbai" } })

// 5. Rename product
db.products.updateOne({ _id: 10 }, { $set: { name: "New Product Name" } })




$inc – Scenario Answers

// 1. Increase login count
db.users.updateOne({ _id: 1 }, { $inc: { loginCount: 1 } })

// 2. Decrease stock by 1
db.products.updateOne({ _id: 5 }, { $inc: { stock: -1 } })

// 3. Increase wallet balance
db.wallets.updateOne({ user_id: 1 }, { $inc: { balance: 500 } })

// 4. Increment likes
db.posts.updateOne({ _id: 3 }, { $inc: { likes: 1 } })

// 5. Increase available stock
db.products.updateOne({ _id: 5 }, { $inc: { stock: 1 } })


$mul – Scenario Answers

// 1. 10% price increase
db.products.updateMany(
  { category: "electronics" },
  { $mul: { price: 1.10 } }
)

// 2. 20% discount
db.products.updateMany(
  { category: "furniture" },
  { $mul: { price: 0.80 } }
)

// 3. 5% salary increase
db.employees.updateMany({}, { $mul: { salary: 1.05 } })

// 4. Apply 18% GST
db.products.updateMany({}, { $mul: { price: 1.18 } })

// 5. 30% sale discount
db.products.updateMany({}, { $mul: { price: 0.70 } })


$push – Scenario Answers

// 1. Add new address
db.users.updateOne(
  { _id: 1 },
  { $push: { addresses: { city: "Delhi", pin: 110001 } } }
)

// 2. Add product review
db.products.updateOne(
  { _id: 5 },
  { $push: { reviews: { user: "Aman", rating: 5 } } }
)

// 3. Add new course
db.students.updateOne(
  { roll: 101 },
  { $push: { courses: "MongoDB" } }
)

// 4. Add product to order
db.orders.updateOne(
  { order_id: 1 },
  { $push: { products: { name: "Mouse", price: 500 } } }
)

// 5. Push chat message
db.chats.updateOne(
  { chat_id: 1 },
  { $push: { messages: "Hello!" } }
)


pull – Scenario Answers

// 1. Remove old address
db.users.updateOne(
  { _id: 1 },
  { $pull: { addresses: { city: "Pune" } } }
)

// 2. Remove bad review
db.products.updateOne(
  { _id: 5 },
  { $pull: { reviews: { rating: 1 } } }
)

// 3. Drop a course
db.students.updateOne(
  { roll: 101 },
  { $pull: { courses: "Maths" } }
)

// 4. Remove cheap products
db.carts.updateOne(
  { _id: 1 },
  { $pull: { items: { price: { $lt: 1000 } } } }
)

// 5. Remove inactive tags
db.products.updateOne(
  { _id: 5 },
  { $pull: { tags: "inactive" } }
)


Nested Data & Arrays – Answers

// 1. Update product quantity inside order
db.orders.updateOne(
  { order_id: 1, "items.product_id": 101 },
  { $set: { "items.$.quantity": 5 } }
)

// 2. Change nested phone number
db.users.updateOne(
  { _id: 1 },
  { $set: { "contact.phone": "9999999999" } }
)

// 3. Increase salary of IT department employees
db.company.updateMany(
  { "employees.department": "IT" },
  { $inc: { "employees.$.salary": 2000 } }
)

// 4. Add skill to specific employee
db.company.updateOne(
  { "employees.emp_id": 5 },
  { $push: { "employees.$.skills": "Node.js" } }
)

// 5. Remove item from nested cart by product ID
db.carts.updateOne(
  { _id: 1 },
  { $pull: { items: { product_id: 10 } } }
)
