Below are clear, trainer-ready answers to all questions, explained simply but correctly.


---

1️⃣ Difference between DELETE and DROP

DELETE	DROP

Deletes rows from a table	Deletes the entire table
Table structure remains	Table structure is removed
Can use WHERE clause	No WHERE clause
Can be rolled back (if not committed)	Cannot be rolled back
DML command	DDL command



---

2️⃣ Difference between DROP and TRUNCATE

TRUNCATE	DROP

Removes all rows	Removes table completely
Table structure remains	Structure removed
Faster than DELETE	Faster but destructive
Cannot use WHERE	Not applicable
DDL command	DDL command



---

3️⃣ Explain ACID Properties

Atomicity → All or nothing (transaction fully completes or rolls back)

Consistency → Database moves from one valid state to another

Isolation → Transactions don’t interfere with each other

Durability → Once committed, data is permanent even after crash


👉 Ensures safe and reliable transactions.


---

4️⃣ How many types of Normalization are there?

Commonly used normalization forms:

1. 1NF – Atomic values


2. 2NF – No partial dependency


3. 3NF – No transitive dependency


4. BCNF – Stronger than 3NF


5. 4NF – Removes multi-valued dependency


6. 5NF – Removes join dependency



👉 3NF is most commonly used in real systems.


---

5️⃣ Fetch the Second Highest Salary (Employee & Department)

Using subquery

SELECT e.name, e.salary, d.dept_name
FROM employee e
JOIN department d ON e.dept_id = d.dept_id
WHERE e.salary = (
    SELECT MAX(salary)
    FROM employee
    WHERE salary < (SELECT MAX(salary) FROM employee)
);


---

6️⃣ Explain CRUD in DBMS

CRUD represents basic database operations:

C – Create → INSERT

R – Read → SELECT

U – Update → UPDATE

D – Delete → DELETE


👉 Used in all database applications.


---

7️⃣ What is an Entity Relationship Diagram (ER Diagram)?

A visual representation of database structure

Shows:

Entities (tables)

Attributes (columns)

Relationships


Used during database design phase



---

8️⃣ How do you describe Relationships?

Relationships define how entities are connected:

One-to-One (1:1)
One entity relates to one entity

One-to-Many (1:M)
One entity relates to multiple entities

Many-to-Many (M:N)
Multiple entities relate to multiple entities (resolved using junction table)



---

9️⃣ Difference between Primary Key and Unique Key

Primary Key	Unique Key

Uniquely identifies a record	Ensures uniqueness
Only one per table	Multiple allowed
Cannot be NULL	Can have one NULL
Used for relationships	Not mandatory for relationships



---

🔟 Why do we use NOT NULL?

Ensures a column cannot store NULL values

Forces mandatory data

Improves data integrity

Prevents incomplete records


👉 Example: student_id, email


---

✅ Final One-Line Summary (Trainer Level)

> These concepts together ensure structured storage, data integrity, efficient querying, and reliable database operations.



If you want, I can:

Convert this into viva answers

Add MCQ traps

Explain each with real-life examples


Just tell me 👍
