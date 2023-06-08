import { Products, User } from "@/types";

const cartInitialState: {
  productsInCart: Products;
  loading: boolean;
  error: string;
} = {
  productsInCart: {},
  loading: false,
  error: "",
};

const userInitialState: User = {
  firstName: "Ronald",
  lastName: "Weasley",
  email: "ronald.weasley@hogwarts.uk",
  billingStatus: "Pro",
  profileImage: "/images/icon-avatar.jpeg",
};

export { cartInitialState, userInitialState };
