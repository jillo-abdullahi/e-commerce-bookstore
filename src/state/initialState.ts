import { CartItem, User } from "@/types";

const cartInitialState: CartItem[] = [];

const userInitialState: User = {
  firstName: "Ronald",
  lastName: "Weasley",
  email: "ronald.weasley@hogwarts.uk",
  billingStatus: "Pro",
  profileImage: "/images/icon-avatar.jpeg",
};

export { cartInitialState, userInitialState };
