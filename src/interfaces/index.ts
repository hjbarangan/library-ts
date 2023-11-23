interface Book {
  isbn: string;
  publication_year: number;
  publisher_id: number;
  title: string;
  author: string;
  category_id: number;
  pages: number;
  status: string;
}

interface User {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  role: string;
}

interface Category {
  category_name: string;
}

interface Publisher {
  publisher_name: string;
  publisher_location: string;
}

interface BorrowRecord {
  book_id: number;
  user_id: number;
  borrow_date: Date;
  return_date: Date;
  status: string;
}

interface Copy {
  book_id: number;
  copy_number: number;
  status: string;
}

export { Book, User, Category, Publisher, BorrowRecord, Copy };
