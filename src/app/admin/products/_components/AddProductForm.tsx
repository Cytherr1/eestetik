"use client";

import { useFormState } from "react-dom";
import { addProduct } from "../../_actions/products";

export default function AddProductForm() {

  const [error, action] = useFormState(addProduct, {})

  return (
    <form action={action}>
    <div className="my-4 text-l">
      <label className="form-control w-full max-w-xs">
        <label className="mb-2" htmlFor="name">
          Product Name
        </label>
        <input
          type="text"
          placeholder="Kantya"
          className="input input-bordered w-full max-w-xs mb-2"
          id="name"
          name="name"
        />
        {error.name && <div className="text-destructive">{error.name}</div>}
      </label>
      <label className="form-control w-full max-w-xs">
        <label className="mb-2" htmlFor="price">
          Product Price
        </label>
        <input
          type="number"
          placeholder="₺750"
          className="input input-bordered w-full max-w-xs mb-2"
          id="price"
          name="price"
        />
        {error.price && <div className="text-destructive">{error.price}</div>}
      </label>
      <label className="form-control w-full max-w-xs">
        <label className="mb-2" htmlFor="description">
          Product Description
        </label>
        <textarea
          placeholder="Compressed Centaury Oil..."
          className="input input-bordered w-full max-w-xs mb-2"
          id="description"
          name="description"
        />
        {error.description && <div className="text-destructive">{error.description}</div>}
      </label>
      <label className="form-control w-full max-w-xs mb-2">
        <label className="mb-2" htmlFor="imagePath">
          Product Image
        </label>
        <input
          type="file"
          className="input input-bordered"
          id="imagePath"
          name="imagePath"
        />
        {error.imagePath && <div className="text-destructive">{error.imagePath}</div>}
      </label>
      <button type="submit" className="btn btn-ghost font-bold">
        <label className="text-l">
          Submit
        </label>
      </button>
    </div>
    </form>
  );
}
