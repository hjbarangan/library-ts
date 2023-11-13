-- CREATE TABLE --
CREATE TABLE IF NOT EXISTS book (
    book_id SERIAL PRIMARY KEY,
    isbn VARCHAR(17) NOT NULL,
    publication_year INT NOT NULL,
    publisher_id SERIAL NOT NULL,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    category_id SERIAL NOT NULL,
    pages INT NOT NULL,
    status VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS copy (
    copy_id SERIAL PRIMARY KEY,
    book_id SERIAL NOT NULL
);

CREATE TABLE IF NOT EXISTS category (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS publisher (
    publisher_id SERIAL PRIMARY KEY,
    publisher_name VARCHAR(255) NOT NULL,
    publisher_location VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS reader (
    reader_id SERIAL PRIMARY KEY,
    family_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS user_account (
    user_id SERIAL PRIMARY KEY,
    reader_id INT,
    admin_id INT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS borrow_record (
    borrow_id SERIAL PRIMARY KEY,
    book_id SERIAL NOT NULL,
    reader_id SERIAL NOT NULL,
    borrow_date DATE NOT NULL,
    returned_date DATE,
    status VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS admin (
    admin_id SERIAL PRIMARY KEY,
    family_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL
);


-- ADD FOREIGN KEY --
ALTER TABLE book
ADD FOREIGN KEY (publisher_id) REFERENCES publisher(publisher_id),
ADD FOREIGN KEY (category_id) REFERENCES category(category_id);

ALTER TABLE copy
ADD FOREIGN KEY (book_id) REFERENCES book(book_id);

ALTER TABLE borrow_record
ADD FOREIGN KEY (book_id) REFERENCES book(book_id),
ADD FOREIGN KEY (reader_id) REFERENCES reader(reader_id);

ALTER  TABLE user_account
ADD FOREIGN KEY (reader_id) REFERENCES reader(reader_id),
ADD FOREIGN KEY (admin_id) REFERENCES admin(admin_id);


--CREATE DATA
INSERT INTO publisher (publisher_name, publisher_location, status)
VALUES ('Miramax Books', 'New York', 'active'),
       ('Bloomsbury', 'London', 'active'),
       ('Dutton Books','Boston', 'active'),
       ('Simon & Schuster', 'New York', 'active'),
       ('Orion Books', 'London', 'active'),
       ('Double Day', 'New York', 'active'),
       ('HarperCollins Publishers', 'New York', 'active'),
       ('Scholastic', 'New York', 'active'),
       ('Random House', 'New York', 'active'),
       ('Penguin Books', 'London', 'active');

INSERT INTO category (category_name)
VALUES ('Fiction'),
       ('Science Fiction'),
       ('Drama'),
       ('Romance'),
       ('Fantasy'),
       ('Thriller'),
       ('Literature'),
       ('Young Adult'),
       ('Classics'),
       ('Mystery');

INSERT INTO reader (family_name, first_name, city, birth_date)
VALUES ('Lee', 'Mark', 'Vancouver, Canada', '1999-08-02'),
       ('Huang', 'Renjun', 'Jilin, China', '2000-03-23'),
       ('Lee', 'Jeno', 'Incheon, South Korea', '2000-04-23'),
       ('Lee', 'Haechan', 'Seoul, South Korea', '2000-06-06'),
       ('Na', 'Jaemin', 'Jeonju, South Korea', '2000-08-13'),
       ('Zhong', 'Chenle', 'Shanghai, China', '2001-11-22'),
       ('Park', 'Jisung', 'Seoul, South Korea', '2002-02-05'),
       ('Kwon', 'Hoshi', 'Gwangju, South Korea', '1996-06-15'),
       ('Jeon', 'Wonwoo', 'Changwon, South Korea', '1996-07-17'),
       ('Lee', 'Dokyeom', 'Jeju Island, South Korea', '1997-02-18');

INSERT INTO book (isbn, publication_year, publisher_id, title, author, category_id, pages, status)
VALUES ('978-0-7475-3269-9', 1997, 2, 'Harry Potter and the Philosophers Stone', 'J.K. Rowling', 5, 223, 'active'),
       ('978-0-525-55536-0', 2017, 3, 'Turtles All the Way Down', 'John Green', 8, 286, 'inactive'),
       ('978-1-4424-2671-9', 2014, 4, 'To All the Boys Ive Loved Before', 'Jenny Han', 8, 421, 'active'),
       ('978-1-4169-6829-0', 2010, 4, 'The Summer I Turned Pretty', 'Jenny Han', 4, 276, 'active'),
       ('0-7868-5629-7', 2005, 1, 'The Lightning Thief', 'Rick Riordan', 5, 377, 'inactive'),
       ('978-0-385-53697-4', 2013, 6, 'Crazy Rich Asians', 'Kevin Kwan', 4, 403, 'active'),
       ('0-06-202402-7', 2011, 7, 'Divergent', 'Veronica Roth', 2, 487, 'inactive'),
       ('978-1-432-85043-2', 2012, 5, 'Eleanor & Park', 'Rainbow Rowell', 4, 333, 'active'),
       ('978-1-4169-5507-8', 2007, 4, 'City of Bones', 'Cassandra Clare', 5, 512, 'inactive'),
       ('978-0-439-02352-8', 2008, 8, 'The Hunger Games', 'Suzanne Collins', 2, 374, 'active');

INSERT INTO copy (book_id)
VALUES (1), (2), (1), (4), (4), (5), (4), (8), (8), (5), (4), (9), (3), (7), (6), (7), (9), (6);

INSERT INTO admin (family_name, first_name)
VALUES ('Lee', 'Bada'),
       ('Yu', 'Karina'),
       ('Kim', 'Winter'),
       ('Shin', 'Ryujin'),
       ('Im', 'Yoona'),
       ('Kim', 'Taeyeon'),
       ('Kim', 'Jungwoo'),
       ('Lee', 'Taeyong'),
       ('Jung', 'Jaehyun'),
       ('Yoon', 'Jeonghan');

INSERT INTO user_account (reader_id, admin_id, username, password, status)
VALUES (5, NULL, 'najaemin42', 'nana', 'active'),
       (NULL, 1, 'badalee', 'bebe', 'active'),
       (NULL, 2, 'yujimin', 'cheesecat', 'inactive'),
       (8, NULL, 'hoshikwon', 'horanghae', 'active'),
       (NULL, 7, 'jungwookim', 'puppywoo', 'active'),
       (1, NULL, 'marklee', 'haechan', 'active'),
       (3, NULL, 'jenolee', 'samoyed', 'active'),
       (NULL, 4, 'shinryujin', 'ryujin', 'inactive'),
       (NULL, 9, 'jungjaehyun', 'dojaejung', 'inactive'),
       (9, NULL, 'jeonwonwoo', 'gaemboi', 'active');

INSERT INTO borrow_record (book_id, reader_id, borrow_date, returned_date, status)
VALUES (8, 2, '2023-10-23', '2023-10-26', 'inactive'),
       (2, 1, '2023-10-26', NULL, 'active'),
       (5, 7, '2023-08-13', '2023-08-25', 'inactive'),
       (3, 10, '2023-10-18', NULL, 'active'),
       (9, 5, '2023-10-01', '2023-10-20', 'inactive'),
       (1, 9, '2023-09-01', '2023-09-08', 'inactive'),
       (6, 3, '2023-07-06', NULL, 'active'),
       (4, 6, '2023-06-06', '2023-06-28', 'inactive'),
       (7, 4, '2023-10-30', NULL, 'active'),
       (5, 2, '2023-11-03', NULL, 'active');

-- UPDATE DATA --
UPDATE category
SET category_name = 'Fiction'
WHERE category_id = 10;

UPDATE book
SET isbn = '0-7868-5686-6', publication_year = 2006, title = 'Sea of Monsters', pages = 279, status = 'active'
WHERE book_id = 5;

UPDATE book
SET isbn = '0-7475-3849-2', publication_year = 1998, title = 'Harry Potter and the Chamber of Secrets', pages = 251
WHERE book_id = 1;


-- BASIC SELECT --
SELECT * FROM admin;
SELECT * FROM book;
SELECT * FROM borrow_record;
SELECT * FROM category;
SELECT * FROM copy;
SELECT * FROM publisher;
SELECT * FROM reader;
SELECT * FROM user_account;

SELECT * FROM reader
WHERE reader_id = 1;

SELECT * FROM book
ORDER BY title;

-- RETRIEVE BOOK TITLE AND CATEGORY --
SELECT book.book_id, book.title, category.category_name FROM book
INNER JOIN category
ON book.category_id = category.category_id;

-- GET NUMBER OF COPIES EACH BOOK --
SELECT book.title, book.author, count(copy.book_id) AS bookCopies
FROM book
INNER JOIN copy
ON book.book_id = copy.book_id
GROUP BY copy.book_id, book.author, book.title;

SELECT * FROM borrow_record
INNER JOIN reader
ON borrow_record.reader_id = reader.reader_id;

-- RETURN BOOK RECORD WHERE STATUS = INACTIVE --
SELECT * FROM borrow_record
INNER JOIN book
ON borrow_record.book_id = book.book_id
WHERE borrow_record.status = 'inactive';

-- RETURN ALL READER IN USER_ACCOUNT IN A NEW TABLE  --
SELECT user_account.username, concat(reader.family_name, ', ', reader.first_name) AS reader_name
FROM ((user_account
INNER JOIN reader ON user_account.reader_id = reader.reader_id));

-- RETRIEVE ONLY READERS
SELECT * FROM user_account
INNER JOIN reader
ON user_account.reader_id = reader.reader_id;

-- RETRIEVE ONLY ADMINS
SELECT * FROM user_account
INNER JOIN admin
on user_account.admin_id = admin.admin_id;


-- DELETE RECORD --
DELETE FROM book
where author = 'Jenny Han';

DELETE FROM publisher
where publisher_name = 'Penguin Books';

-- DROP ALL TABLES --
DROP TABLE admin, book, borrow_record, category, copy, publisher, reader, user_account;

