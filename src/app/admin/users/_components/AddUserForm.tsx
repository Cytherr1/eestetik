"use client";

import { useFormState } from "react-dom";
import { addUser } from "../../_actions/users";

export default function AddUserForm() {

  const [error, action] = useFormState(addUser, {})

  return (
    <form  action={action}>
      <div className="my-4 text-l">
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            placeholder="John"
            className="input input-bordered w-full max-w-xs mb-2"
            id="name"
            name="name"
          />
          {error.name && <div className="text-destructive">{error.name}</div>}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="surname">
            Surname
          </label>
          <input
            type="text"
            placeholder="Doe"
            className="input input-bordered w-full max-w-xs mb-2"
            id="surname"
            name="surname"
          />
          {error.surname && <div className="text-destructive">{error.surname}</div>}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            placeholder="johndoe@example.com"
            className="input input-bordered w-full max-w-xs mb-2"
            id="email"
            name="email"
          />
          {error.email && <div className="text-destructive">{error.email}</div>}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="johndoe"
            className="input input-bordered w-full max-w-xs mb-2"
            id="hashedPassword"
            name="hashedPassword"
          />
          {error.hashedPassword && <div className="text-destructive">{error.hashedPassword}</div>}
        </label>
        <label className="form-control w-full max-w-xs">
          <label className="mb-2" htmlFor="tel">
            Telephone Number
          </label>
          <input
            type="tel"
            placeholder="+90 543 942 4001"
            className="input input-bordered w-full max-w-xs mb-2"
            id="telephoneNumber"
            name="telephoneNumber"
          />
          {error.telephoneNumber && <div className="text-destructive">{error.telephoneNumber}</div>}
        </label>
        <button type="submit" className="btn btn-ghost font-bold">
          <label className="text-l">Submit</label>
        </button>
      </div>
    </form>
  );
}
