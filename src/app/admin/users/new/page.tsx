import AddUserForm from "../_components/AddUserForm";

export default function AddUser() {
  return (
    <div className="p-4 grid justify-center items-center text-base-content font-bold select-none">
      <label className="text-2xl">Add User</label>
      <AddUserForm />
    </div>
  );
}
