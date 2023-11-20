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
  reader_id: number;
  admin_id: number;
  username: string;
  password: string;
  status: string;
}

interface Category {
  category_name: string;
}

interface Publisher {
  publisher_name: string;
  publisher_location: string;
}

export { Book, User, Category, Publisher };
