import { Dropdown } from "./Dropdown";

type Product = { id: string; title: string };
export const Product = () => {
  const products: Product[] = [
    { id: "p1", title: "Laptop" },
    { id: "p2", title: "Phone" },
  ];
  return (
    <>
      <Dropdown<Product>
        options={products}
        onSelect={(product) => console.log(product.title)}
        renderOption={(product) => product.title}
      />
      ;
    </>
  );
};
