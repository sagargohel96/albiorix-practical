export const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    description: "Description for Product 1",
    price: 29.99,
    quantity: 10,
    status: "Active",
    image: "",
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description for Product 2",
    price: 39.99,
    quantity: 5,
    status: "Inactive",
    image: "",
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description for Product 3",
    price: 49.99,
    quantity: 15,
    status: "Active",
    image: "",
  },
];

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  status: string;
  image: string;
};
