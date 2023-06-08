type Product = {
  id: number;
  title: string;
  description: string | JSX.Element;
  price: number;
  image: string;
  quantity: number;
};

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartItems = {
  [key: number]: CartItem;
};

type Products = {
  [key: number]: Product;
};

type Author = {
  name: string;
  bio: string;
  image: string;
  link: string;
};

type User = {
  firstName: string;
  lastName: string;
  email: string;
  billingStatus: string;
  profileImage: string;
};

export type { Product, Author, Products, User, CartItem, CartItems };
