BOOKS:

##### GET http://localhost:3000/api/books
##### GET http://localhost:3000/api/books/1
##### POST http://localhost:3000/api/books

```
{
"isbn": "test-isbn-1",
"publication_year": 2006,
"publisher_id": 1,
"title": "The 5th Wave",
"author": "Herzlia Jane Barangan",
"category_id": 2,
"pages": 233,
"status": "active"
}
```

##### PUT http://localhost:3000/api/books

```
{
"isbn": "test-isbn-1",
"publication_year": 2008,
"publisher_id": 1,
"title": "The 5th Wave : First Edition",
"author": "Herzlia Jane Barangan",
"category_id": 3,
"pages": 236,
"status": "active"
}
```
##### DELETE http://localhost:3000/api/books/1
