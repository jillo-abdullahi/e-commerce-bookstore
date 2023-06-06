type Product = {
  id: number;
  title: string;
  description: string | JSX.Element;
  price: number;
  image: string;
};

type Products = {
  [key: number]: Product;
};

type Author = {
  name: string;
  bio: string;
  image: string;
};

export type { Product, Author, Products };
