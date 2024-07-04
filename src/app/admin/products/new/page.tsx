import AddProductForm from "../_components/AddProductForm";

export default function AddProduct() {
  return (
    <div className="p-4 grid justify-center items-center text-base-content font-bold select-none">
      <label className="text-2xl">Add Product</label>
      <AddProductForm />
    </div>
  );
}
